import React from "react";

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className=" px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {text}
    </button>
  );
};

export default CustomButton;
