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
  const buttonStyles =
    disabled === true
      ? "px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-md focus:outline-none"
      : "px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  return (
    <button disabled={disabled} type={type} className={buttonStyles}>
      {text}
    </button>
  );
};

export default CustomButton;
