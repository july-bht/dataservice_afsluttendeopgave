import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "../pages/slider.css"

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <div>{direction === "next" ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />} </div>
    </button>
  );
}