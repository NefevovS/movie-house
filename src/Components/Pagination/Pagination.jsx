import React, { useMemo } from "react";
import s from "./Pagination.module.css";
import {usePagination} from "../../hooks/usePaggination";

const Pagination = ({ page, setPage, totalCountPages }) => {
  const allPageArray = usePagination(totalCountPages);
  const displayedPageArray = useMemo(() =>
      allPageArray.filter((pg) => pg < page + 5 && pg > page - 5, [page])
  );

  return (
    <div className={s.paginationContainer}>
      {displayedPageArray.map((p) => (
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

export default Pagination;