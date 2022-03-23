import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getPosts } from "../../store/selectors";
import { fetchPosts } from "../../store/reducers/actionCreators/postActionCreators";
import Post from "./Post/Post";
import { IPost } from "../../models/IPost";
import s from "./posts.module.scss";

import classNames from "classnames/bind";
import Pagination from "../common/Pagination";

const cx = classNames.bind(s);

const Posts = () => {
  const dispatch = useAppDispatch();
  const { posts, totalCount, error, isLoading } = useAppSelector(getPosts);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pagesCount = Math.ceil(totalCount / posts.length);
  let postsRows;

  useEffect(() => {
    dispatch(fetchPosts(currentPage));
  }, [currentPage]);

  if (!!posts) {
    postsRows = getCardsRow(posts);
  }

  const postsContent =
    postsRows &&
    postsRows.map((rowOfPosts, index) => (
      <div className={cx("posts__row")} key={index}>
        {rowOfPosts.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </div>
    ));

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={cx("posts", "posts__container")}>
      {postsContent}
      <Pagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        setCurrentPage={onChangePage}
      />
    </div>
  );
};

const getCardsRow = (posts: IPost[]) => {
  const rows = [...Array(Math.ceil(posts.length) / 2)];
  const cardRows = rows.map((row, index) =>
    posts.slice(index * 2, index * 2 + 2)
  );
  return cardRows;
};

export default Posts;
