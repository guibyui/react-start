import React from "react";
import { useForm } from "react-hook-form";

const DefaultInput = ({
  placeholder,
  inputContainerStyle,
  inputStyle,
  labelStyle,
  label,
  name,
  onChange,
  value,
}) => {
  return (
    <div
      className={"flex flex-col outline-none m-4 " + inputContainerStyle}
    >
      <label className={" " + labelStyle}>{label}</label>
      <input
        className={
          "border border-black outline-none text-lg text-darkGray p-2 " +
          inputStyle
        }
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
        autoComplete="off"
      />
    </div>
  );
};

export default DefaultInput;
