import React from "react";

const GradientBtn = ({ title, className }) => {
  return (
    <button
      className={`bg-gradient-to-r from-thWhite to-thBlue py-2 px-6 text-black rounded-lg duration-300 hover:scale-110`}
    >
      {title}
    </button>
  );
};

export default GradientBtn;