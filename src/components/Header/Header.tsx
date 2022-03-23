import React from 'react';
import s from "./header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(s);

const Header = () => {
    return (
        <div className={cx("header","header__container")}>
            <span className={cx("header__title")}>Test task</span>
            <span className={cx("header__title")}>Inforce</span>
        </div>
    );
};

export default Header;