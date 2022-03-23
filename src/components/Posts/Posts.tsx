import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getPosts } from "../../store/selectors";
import { fetchPosts } from "../../store/reducers/actionCreators/postActionCreators";

const Posts = () => {
  const dispatch = useAppDispatch();
  const { posts, error, isLoading } = useAppSelector(getPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Posts;