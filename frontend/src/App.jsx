import React from "react";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import SpotlightBackground from "./Components/SpotlightBackground.jsx"; 

export default function App() {


  return (
    <SpotlightBackground>
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 "><span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Bookley. A Simple Reservation System</span></h1>
      <hr className = "mt-5 border-t-4 border-white"></hr>

      {/* display the HomePage*/}
      
      <HomePage />
    
       <hr className = "mt-5 border-t-4 border-white"></hr>

    </div>
    </SpotlightBackground>
  );
}