import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <NavLink to="/user/12">User12</NavLink>
      <NavLink to="/user/18">User18</NavLink>
    </div>
  );
}

export default Home;
