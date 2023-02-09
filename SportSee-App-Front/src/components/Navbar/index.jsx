import React from "react";
import BtnNav from "../BtnNav";
import meditation from "../../assets/meditation.svg";
import swimming from "../../assets/swimming.svg";
import bicycle from "../../assets/bicycle.svg";
import gym from "../../assets/gym.svg";

/**
 * The Navbar function returns a div with a nav and ul inside of it. The ul has four li's inside of it.
 * Each li has a BtnNav component inside of it. The BtnNav component has a prop called props. The props
 * prop is equal to one of the four objects that I defined at the top of the file.
 * @returns The navbar component is being returned.
 */
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
