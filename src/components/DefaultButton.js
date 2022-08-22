import React from "react";
import { Link } from "react-router-dom";

const DefaultButton = ({ key, to, children, className, onClick }) => {
  return (
    <Link
      key={key}
      to={to}
      onClick={onClick}
      className={
        "px-8 py-1 m-4 bg-red-700 text-white rounded-md font-medium text-lg " +
        className
      }
    >
      {children}
    </Link>
  );
};

export default DefaultButton;
