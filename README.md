# Reservation-System

A room/desk booking app with an **Express** backend (Supabase-backed) and a **React + Vite** frontend.

## Project structure

```
Reservation-System/
├── backend/
│   ├── config/
│   │   └── supabaseClient.js      # Supabase client (reads .env)
│   ├── controllers/
│   │   └── reservationController.js # Route handlers (express Router)
│   ├── server.js                  # App entry: middleware + mounts routes
│   ├── .env.example               # Template for Supabase credentials
│   └── package.json
└── frontend/
    └── src/                       # React app (Vite, Tailwind, Framer Motion)
```

## Backend setup

```bash
cd backend
npm install
cp .env.example .env    # then fill in your Supabase credentials
npm start               # runs on http://localhost:5000
```

### Environment variables (`backend/.env`)

| Key | Description |
| --- | --- |
| `SUPABASE_URL` | Your project URL, e.g. `https://<ref>.supabase.co` |
| `SUPABASE_ANON_KEY` | Your anon/public API key |

The client is created in `backend/config/supabaseClient.js` and shared with the
controllers. If the variables are missing the server still boots, but requests
will fail until real credentials are provided.

### Database schema (Supabase / Postgres)

```sql
create table resources (
  id   bigint primary key generated always as identity,
  name text,
  type text
);

create table bookings (
  id            bigint primary key generated always as identity,
  resource_id   bigint references resources (id),
  customer_name text,
  booking_time  time
);
```

The API maps these columns to the shape the frontend expects:
`customer_name` → `name`, `booking_time` → `time`, `resource_id` → `resourceId`.

> **RLS:** if inserts fail with `new row violates row-level security policy for
> table "bookings"`, run this in the Supabase SQL Editor:
>
> ```sql
> create policy "anon can insert bookings"
>   on bookings for insert to anon with check (true);
> ```

## API endpoints

Defined in `backend/controllers/reservationController.js` and mounted in
`backend/server.js` via `app.use("/", reservationRoutes)`.

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/` | Health check (`Backend is running!`) |
| `GET` | `/resources` | List all resources |
| `GET` | `/bookings` | All bookings |
| `GET` | `/bookings/:id` | Bookings for a resource |
| `POST` | `/book` | Create a booking — body: `{ resourceId, name, time }` |

Example:

```bash
curl -X POST http://localhost:5000/book \
  -H "Content-Type: application/json" \
  -d '{"resourceId": 1, "name": "Ada", "time": "10:00"}'
```

All route handlers are async and return `{ message, error }` with status `500`
if the Supabase query fails.

## Frontend setup

```bash
cd frontend
npm install
npm run dev     # Vite dev server
npm run build   # production build
npm run lint    # ESLint
```

### Frontend API URL

`frontend/src/api/bookingsApi.js` resolves its API base as:

| Priority | Source |
| --- | --- |
| 1 | `VITE_API_URL` env var (e.g. `frontend/.env.local`) |
| 2 | Fallback: `https://reservation-system-2.onrender.com` |

`frontend/.env.local` (gitignored) points at `http://localhost:5000` for local
development. Restart `npm run dev` after changing it.
