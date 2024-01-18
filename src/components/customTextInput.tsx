import React, { useState } from "react";

type CustomTextInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  className?: string;
};
const CustomTextInput: React.FC<CustomTextInputProps> = ({
  value,
  onChange,
  name,
  className,
}) => {
  return (
    <input
      className={className}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomTextInput;
