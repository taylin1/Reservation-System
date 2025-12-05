import React from "react";


export default function BookingList({ bookings }) {

return (

<div className="bg-white p-4 shadow rounded">
<h2 className="text-lg font-semibold mb-2">Bookings</h2>

{bookings.length === 0 && <p>No bookings yet.</p>}

{bookings.map ((b) => (
<div key={b.id} className="border-b py-2">
<p><strong>Name:</strong> {b.name}</p>
<p><strong>Time:</strong> {b.time}</p>
</div>
))}
</div>
);
}