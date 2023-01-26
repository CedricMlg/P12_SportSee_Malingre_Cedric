import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/main.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
const container = document.getElementById("root");
const root = createRoot(container);

/* It's rendering the app. */
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/user/:id" element={<Profile />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

