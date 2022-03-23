import React, { FC, memo } from "react";
import { createPages } from "../../../helpers/createPages";
import s from "./pagination.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(s);

interface PaginationProps {
  pagesCount: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  pagesCount,
  currentPage,
  setCurrentPage,
}) => {
  const pages: number[] = [];
  createPages(pages, pagesCount, currentPage);

  const onPageChange = (e: React.MouseEvent<HTMLSpanElement>) => {
    const page = +(e.target as HTMLSpanElement).innerText;
    setCurrentPage(page);
  };

  const onPrevClick = () => {
    setCurrentPage(--currentPage);
  };

  const onNextClick = () => {
    setCurrentPage(++currentPage);
  };

  return (
    <div className={cx("pagination", "pagination__container")}>
      {currentPage > 1 ? (
        <button className={cx("pagination__btn")} onClick={onPrevClick}>
          PREV
        </button>
      ) : (
        ""
      )}
      {pages.map((page) => (
        <span
          className={
            currentPage === page ? s.pagination__selected : s.pagination__page
          }
          onClick={(e) => onPageChange(e)}
          key={page}
        >
          {page}
        </span>
      ))}
      {currentPage < pagesCount ? (
        <button className={cx("pagination__btn")} onClick={onNextClick}>
          NEXT
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default memo(Pagination);
