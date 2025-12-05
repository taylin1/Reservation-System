import React, { useEffect, useState } from "react";
import { getResources, getBookings } from "../api/bookingsApi";
import ResourceList from "../Components/ResourceList";
import ReservationForm from "../Components/ReservationForm";
import BookingList from "../Components/BookingList";

export default function HomePage() {
  const [resources, setResources] = useState([]);
  const [selected, setSelected] = useState(null);
  const [bookings, setBookings] = useState([]);

  // Load resources on page load
  useEffect(() => {
    getResources().then(setResources);
  }, []);

  // Load bookings when a resource is selected
  useEffect(() => {
    if (selected) {
      getBookings(selected.id).then(setBookings);
    }
  }, [selected]);

  return (
    <div>
      <ResourceList
        resources={resources}
        selected={selected}
        onSelect={setSelected}
      />

      {selected && (
        <>
          <ReservationForm
            resource={selected}
            onBooked={() =>
              getBookings(selected.id).then(setBookings)
            }
          />
          <BookingList bookings={bookings} />
        </>
      )}
    </div>
  );
}
