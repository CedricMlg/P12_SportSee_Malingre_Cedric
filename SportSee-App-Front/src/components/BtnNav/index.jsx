import React from "react";

/**
 * BtnNav is a function that returns a button with an image inside of it.
 * @returns A button with an image inside of it.
 */
function BtnNav(props) {
  const svg = props.props;
  return (
    <button className="btn-nav">
      <img src={svg} />
    </button>
  );
}

export default BtnNav;
