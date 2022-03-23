import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getPosts } from "../../store/selectors";
import { fetchPosts } from "../../store/reducers/actionCreators/postActionCreators";
import Post from "./Post/Post";
import { IPost } from "../../models/IPost";
import s from "./posts.module.scss";

import classNames from "classnames/bind";
import Pagination from "../common/Pagination/Pagination";
import SearchBar from "../common/SearchBar/SearchBar";
import {deletePage, getCurrentPage} from "../../helpers/pageHelper";

const cx = classNames.bind(s);

const Posts = () => {
  const dispatch = useAppDispatch();
  const { posts, totalCount } = useAppSelector(getPosts);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    let page = getCurrentPage();
    if (!!page) return +page;

    return 1;
  });
  const pagesCount = Math.ceil(totalCount / posts.length);
  let postsRows;

  useEffect(() => {
    dispatch(fetchPosts(currentPage));

    return () => {
      deletePage();
    }
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
      <SearchBar posts={posts} />
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
