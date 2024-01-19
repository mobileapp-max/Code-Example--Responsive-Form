import React from "react";

interface CustomButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  type,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className="px-4 py-2 text-sm font-medium text-white bg-customblue rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {text}
    </button>
  );
};

export default CustomButton;
