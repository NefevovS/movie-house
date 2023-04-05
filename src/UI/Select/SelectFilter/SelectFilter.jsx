import React from "react";
import s from "./SelectFilter.module.css";

const SelectFilter = ({ options, ...props }) => {
  return (
    <select {...props} className={s.select}>
      <option value={options.defaultValue.value}>
        {options.defaultValue.text}
      </option>
      {options.options.map((option) => (
        <option value={option.value}>{option.text}</option>
      ))}
    </select>
  );
};

export default SelectFilter;