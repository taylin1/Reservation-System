import React, { useState } from "react";
import { createBooking } from "../api/bookingsApi";


export default function ReservationForm({ resource, onBooked }) {
const [name, setName] = useState("");
const [time, setTime] = useState("");


const handleSubmit = (e) => {
e.preventDefault();


if (!name || !time) return alert("Please fill all fields");


createBooking(resource.id, name, time).then(() => {
alert("Booking added!");
onBooked(); // reload bookings
setName("");
setTime("");
});
};


return (
<form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-4">
<h2 className="text-lg font-semibold mb-2">Book: {resource.name}</h2>


<input
type="text"
placeholder="Your Name"
className="border p-2 w-full mb-2"
value={name}
onChange={(e) => setName(e.target.value)}
/>


<input
type="time"
className="border p-2 w-full mb-2"
value={time}
onChange={(e) => setTime(e.target.value)}
/>


<button className="bg-blue-500 text-white px-4 py-2 rounded">
Book Now
</button>
</form>
);
}