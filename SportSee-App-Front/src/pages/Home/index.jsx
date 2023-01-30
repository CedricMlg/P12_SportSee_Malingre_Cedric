import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <NavLink to="/user/12">
        <li>User12</li>
      </NavLink>
      <NavLink to="/user/18">
        <li>User18</li>
      </NavLink>
    </div>
  );
}

export default Home;
