import React from "react";
import s from "./Paggination.module.css";

const Paggination = ({ page, setPage, pageArray }) => {
  const newArray=pageArray.filter((pg)=> (pg<page+5)&&(pg>page-5))
    return (
    <div className={s.pagginationContainer}>
      {newArray.map((p) => (
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