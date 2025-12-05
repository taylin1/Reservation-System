import React from "react";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";

export default function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Simple Booking System</h1>

      {/* display the HomePage*/}
      <HomePage />
    </div>
  );
}