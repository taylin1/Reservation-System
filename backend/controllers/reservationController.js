const express = require("express");
const supabase = require("../config/supabaseClient");

const router = express.Router();



// Get all resources
router.get("/resources", async (req, res) => {
  try {
    const { data, error } = await supabase.from("resources").select("*");

    if (error) throw error;

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch resources", error: error.message });
  }
});

// Get bookings for a resource
router.get("/bookings/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .eq("resource_id", id);

    if (error) throw error;

    res.json(data.map(toApiBooking));
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bookings", error: error.message });
  }
});

// Get all bookings
router.get("/bookings", async (req, res) => {
  try {
    const { data, error } = await supabase.from("bookings").select("*");

    if (error) throw error;

    res.json(data.map(toApiBooking));
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bookings", error: error.message });
  }
});

// Create a booking
router.post("/book", async (req, res) => {
  try {
    const { resourceId, name, time } = req.body;

    const { data, error } = await supabase
      .from("bookings")
      .insert([{ resource_id: resourceId, customer_name: name, booking_time: time }])
      .select()
      .single();

    if (error) throw error;

    res.json({ message: "Booking added", booking: toApiBooking(data) });
  } catch (error) {
    res.status(500).json({ message: "Failed to create booking", error: error.message });
  }
});

module.exports = router;
