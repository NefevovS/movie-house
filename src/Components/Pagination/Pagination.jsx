import React, { useMemo } from "react";
import s from "./Pagination.module.css";
import { usePagination } from "../../hooks/usePaggination";

const Pagination = ({ page, setPage, totalCountPages }) => {
  const allPageArray = usePagination(totalCountPages);
  const displayedPageArray = useMemo(() =>
    allPageArray.filter((pg) => pg < page + 5 && pg > page - 5, [page])
  );
  const ellipsisHandlerMinus = (page) => {
    return Math.round((1 + page) / 2);
  };
  const ellipsisHandlerPlus = (page, totalCountPages) => {
    return Math.round((totalCountPages + page) / 2);
  };

  return (
    <div className={s.paginationContainer}>
      {page > 5 ? (
        <div>
          <div className={s.page} onClick={()=>setPage(1)}>1</div>
          <div
            className={s.page}
            onClick={() => setPage(ellipsisHandlerMinus(page))}
          >
            ...
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {displayedPageArray.map((p) => (
        <div
          className={p === page ? [s.page, s.active].join(" ") : s.page}
          key={p}
          onClick={() => setPage(p)}
        >
          {p}
        </div>
      ))}
      {page < totalCountPages - 5 ? (
        <div>
          <div
            className={s.page}
            onClick={() => setPage(ellipsisHandlerPlus(page, totalCountPages))}
          >
            ...
          </div>
          <div className={s.page} onClick={()=>setPage(totalCountPages)}>{totalCountPages}</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Pagination;
