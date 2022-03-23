import React from 'react';
import s from "./content.module.scss";
import classNames from "classnames/bind";
import Posts from "../Posts/Posts";

const cx = classNames.bind(s);

const Content = () => {
    return (
        <div className={cx("content", "content__container")}>
            <Posts />
        </div>
    );
};

export default Content;