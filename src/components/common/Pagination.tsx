import React, { FC, memo } from "react";
import { createPages } from "../../helpers/createPages";
import s from "./pagination.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(s);

interface PaginationProps {
  pagesCount: number;
  currentPage: number;
  setCurrentPage: (page: number) => void
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
    setCurrentPage(page)
  };
  return (
    <div className={cx("pagination", "pagination__container")}>
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
    </div>
  );
};

export default memo(Pagination);
