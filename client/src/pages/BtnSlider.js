import React from "react";
// import "./Slider.css";
// import leftArrow from ".../";
// import rightArrow from "../assets/all-images/icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? "right" : "left"} />
    </button>
  );
}