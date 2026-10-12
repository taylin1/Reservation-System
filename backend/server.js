const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const path = require("path");
require("dotenv").config();

const reservationRoutes = require("./controllers/reservationController");

app.use(cors());
app.use(express.json());


const customLogger = (req, res, next) => {
  const timestamp = new Date().toLocaleString();
  console.log(`[${timestamp}] ${req.method} request made to: ${req.url}`);
  next(); // Pass control to the next middleware/route handler
};

app.use(customLogger);


app.use("/static", express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.send("Backend is running!");
});


// Mount reservation routes (controller folder)
app.use("/", reservationRoutes);


app.listen(port, () => console.log(`Server running on port ${port}`));
