import React from "react";
import BtnNav from "../BtnNav";
import meditation from "../../assets/meditation.svg";
import swimming from "../../assets/swimming.svg";
import bicycle from "../../assets/bicycle.svg";
import gym from "../../assets/gym.svg";

function Navbar() {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <li>
            <BtnNav props={meditation} />
          </li>
          <li>
            <BtnNav props={swimming} />
          </li>
          <li>
            <BtnNav props={bicycle} />
          </li>
          <li>
            <BtnNav props={gym} />
          </li>
        </ul>
      </nav>
      <p>Copyright, SportSee 2020</p>
    </div>
  );
}

export default Navbar;
