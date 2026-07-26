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
<form onSubmit={handleSubmit} className="p-4 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-xl mb-6 max-w-md shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
<h2 className="text-xl italic text-white mb-2" style={{fontFamily:"Fraunces, serif"}}>Book: {resource.name}</h2>

   <div>
          <label className="block text-[11px] uppercase tracking-[0.15em] text-white/40 mb-1.5">
            Guest name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-white
              placeholder:text-white/30
              focus:outline-none focus:ring-2 focus:ring-purple-400/40 focus:border-purple-400/60"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
 
        <div>
          <label className="block text-[11px] uppercase tracking-[0.15em] text-white/40 mb-1.5">
            Time
          </label>
          <input
            type="time"
            style={{ colorScheme: "dark" }}
            className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-white
              focus:outline-none focus:ring-2 focus:ring-purple-400/40 focus:border-purple-400/60"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
 


<button className="my-5 w-full py-2.5 rounded-lg font-medium tracking-wide text-white
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            hover:brightness-110 transition-all
            shadow-[0_4px_20px_rgba(168,85,247,0.35)]
            disabled:opacity-50" >Book Now</button>
</form>
);
}