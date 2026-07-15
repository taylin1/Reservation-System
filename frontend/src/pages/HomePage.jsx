import React, { useEffect, useState } from "react";
import { getResources, getBookings } from "../api/bookingsApi";
import ResourceList from "../Components/ResourceList";
import ReservationForm from "../Components/ReservationForm";
import BookingList from "../Components/BookingList";
import SpotlightBackground from "../Components/SpotlightBackground.jsx"


export default function HomePage() {
  const [resources, setResources] = useState([]);
  const [selected, setSelected] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getResources()
      .then((data) => {
        setResources(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const loadBookings = (resourceId) => {
    getBookings(resourceId)
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error(err));
  };

  const handleSelect = (resource) => {
    setSelected(resource);
    loadBookings(resource.id);
  };

  if (loading) {
    
    return (
    
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
      
    );
  }

  return (
    <div>
      <ResourceList resources={resources} selected={selected} onSelect={handleSelect} />

      {selected && (
        <ReservationForm resource={selected} onBooked={() => loadBookings(selected.id)} />
      )}

      <BookingList bookings={bookings} />
    
</div>
  );
}



