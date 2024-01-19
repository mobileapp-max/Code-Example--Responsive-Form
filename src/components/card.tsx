import React from "react";

const Card: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className="flex w-screen h-screen md:max-w-xl lg:max-w-xl xl:max-w-2xl mx-auto p-8 pt-4 space-y-6 bg-white md:rounded-xl shadow-lg md:h-auto md:min-h-[500px]">
      {children}
    </div>
  );
};

export default Card;
