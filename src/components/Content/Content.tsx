import React from 'react';
import s from "./content.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(s);

const Content = () => {
    return (
        <div className={cx("content", "content__container")}>

        </div>
    );
};

export default Content;