import React from "react";

const CommonButton = ({ buttonName, buttonOnClick, btnName }) => {
  return (
    <div className="flex items-center justify-center mb-4 md:mr-4 w-auto ">
      <button
        onClick={buttonOnClick}
        value={btnName}
        className="block bg-orange-500 text-white py-2 px-8 rounded-md shadow-lg transform transition-transform duration-200 ease-in-out active:scale-95 w-full m-2 p-2 md:w-auto"
      >
        {buttonName}
      </button>
    </div>
  );
};

export default CommonButton;
