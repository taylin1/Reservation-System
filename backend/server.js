const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());


// Fake data 
let resources = [
{ id: 1, name: "Room A", type: "Meeting Room" },
{ id: 2, name: "Room B", type: "Conference Room" },
{ id: 3, name: "Desk 1", type: "Work Desk" },
];


let bookings = [];


// Get all resources
app.get("/resources", (req, res) => {
res.json(resources);
});

app.get("/", (req, res) => {
  res.send("Backend is running!");
});


// Get bookings for a resource
app.get("/bookings/:id", (req, res) => {
const id = Number(req.params.id);
const list = bookings.filter((b) => b.resourceId === id);
res.json(list);
});


// Create a booking
app.post("/book", (req, res) => {
const { resourceId, name, time } = req.body;


const newBooking = {
id: bookings.length + 1,
resourceId,
name,
time,
};


bookings.push(newBooking);
res.json({ message: "Booking added", booking: newBooking });
});


app.listen(port, () => console.log(`Server running on port ${port}`));
