import React from "react";
import s from "./Paggination.module.css";

const Paggination = ({ page, setPage, pageArray }) => {
  return (
    <div className={s.pagginationContainer}>
      {pageArray.map((p) => (
        <div
          className={p === page ? [s.page, s.active].join(" ") : s.page}
          key={p}
          onClick={() => setPage(p)}
        >
          {p}
        </div>
      ))}
    </div>
  );
};

export default Paggination;