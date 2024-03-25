import React from "react";
import Button from "../Button/Button";

const EmptyState = ({ message, address }) => {
  return (
    <div className="h-screen gap-5 flex flex-col justify-center items-center">
      <p className="text-gray-600 text-3xl">{message}</p>
      <Button path={address} btnText={"Browse Blogs"} />
    </div>
  );
};

export default EmptyState;
