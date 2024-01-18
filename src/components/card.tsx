import React from "react";

const Card: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className="w-full max-w-md p-8 pt-4 space-y-6 bg-white rounded-xl shadow-lg">
      {children}
    </div>
  );
};

export default Card;
