import React from "react";
import s from "./SelectFilter.module.css";

const SelectFilter = ({ options, ...props }) => {
  return (
      <div className={s.selectWrapper}>
          <label htmlFor={options.label} className={s.filterLabel}>{options.label}</label>
          <select {...props} className={s.select} id={options.label} >
              <option value={options.defaultValue.value}>
                  {options.defaultValue.text}
              </option>
              {options.options.map((option) => (
                  <option key={option.value} value={option.value}>{option.text}</option>
              ))}
          </select>
      </div>
  )}


export default SelectFilter;