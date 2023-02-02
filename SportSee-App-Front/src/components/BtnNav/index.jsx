import React from "react";

function BtnNav(props) {
  const svg = props.props;
  return (
    <button className="btn-nav">
      <img src={svg} />
    </button>
  );
}

export default BtnNav;
