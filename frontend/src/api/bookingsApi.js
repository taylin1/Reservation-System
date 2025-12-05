const API_URL = "https://reservation-system-2.onrender.com";

export async function getResources() {
const res = await fetch(`${API_URL}/resources`);
return res.json();
}


export async function getBookings(resourceId) {
const res = await fetch(`${API_URL}/bookings/${resourceId}`);
return res.json();
}


export async function createBooking(resourceId, name, time) {
const res = await fetch(`${API_URL}/book`, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ resourceId, name, time }),
});
return res.json();
}

// Get all the Bookings
export async function getAllBookings() {
  const response = await fetch(`${API_URL}/bookings`);
  return response.json();
}