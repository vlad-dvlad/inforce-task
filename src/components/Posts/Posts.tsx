import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getPosts } from "../../store/selectors";
import { fetchPosts } from "../../store/reducers/actionCreators/postActionCreators";
import Post from "./Post/Post";
import { IPost } from "../../models/IPost";
import s from "./posts.module.scss"

import classNames from "classnames/bind";

const cx = classNames.bind(s);

const Posts = () => {
  const dispatch = useAppDispatch();
  const { posts, error, isLoading } = useAppSelector(getPosts);
  let postsRows;

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (!!posts) {
    postsRows = getCardsRow(posts);
  }

  const postsContent =
    postsRows &&
    postsRows.map((rowOfPosts, index) => (
      <div  className={cx("posts__row",)} key={index}>
        {rowOfPosts.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </div>
    ));

  return (
    <div className={cx("posts", "posts__container")}>
      {/*      {posts.map((post) => (
        <Post {...post} key={post.id}/>
      ))}*/}
      {postsContent}
    </div>
  );
};

const getCardsRow = (posts: IPost[]) => {
  const rows = [...Array(Math.ceil(posts.length) / 2)];
  const cardRows = rows.map((row, index) =>
    posts.slice(index * 2, index * 2 + 2)
  );

  console.log(cardRows)
  return cardRows;
};

export default Posts;
