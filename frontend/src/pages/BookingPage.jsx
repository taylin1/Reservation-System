import React, { useEffect, useState } from "react";
import { getAllBookings } from "../api/bookingsApi.js";
import BookingList from "../Components/BookingList.jsx";

export default function BookingPage() {
  const [bookings, setBookings] = useState([]);

  // Load all bookings on page load
  useEffect(() => {
    getAllBookings().then(setBookings);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Bookings</h2>
       <BookingList bookings={bookings} />
    </div>
  );
}