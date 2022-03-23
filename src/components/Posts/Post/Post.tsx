import React, { FC } from "react";
import { IPost } from "../../../models/IPost";
import s from "./post.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(s);

const Post: FC<IPost> = ({ title, body }) => {
  return (
    <div className={cx("post", "post__container")}>
      <div className={cx("post__label")}>
        <span>Title: </span>
        {title}
      </div>
      <div className={cx("post__label")}>
        <span>Body: </span>
        {body}
      </div>
    </div>
  );
};

export default Post;