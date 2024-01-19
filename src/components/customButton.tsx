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
}: {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) => {
  const buttonClass = disabled
    ? "px-4 py-2 text-sm font-medium text-white bg-gray-400 rounded-md focus:outline-none"
    : "px-4 py-2 text-sm font-medium text-white bg-customblue rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

  return (
    <button disabled={disabled} type={type} className={buttonClass}>
      {text}
    </button>
  );
};

export default CustomButton;
