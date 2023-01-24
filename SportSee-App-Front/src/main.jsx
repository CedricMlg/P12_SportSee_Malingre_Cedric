import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/main.scss";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
// import FicheLogement from "./pages/Fiche-Logement";
// import APropos from "./pages/A-Propos";
// import Error from "./pages/Error";
const container = document.getElementById("root");
const root = createRoot(container);

/* It's rendering the app. */
root.render(
  <React.StrictMode>
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  </React.StrictMode>
);

