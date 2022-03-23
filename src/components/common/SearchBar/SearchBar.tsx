import React, { FC, useState } from "react";
import s from "./searchBar.module.scss";
import classNames from "classnames/bind";
import { IPost } from "../../../models/IPost";

const cx = classNames.bind(s);

interface PostsList {
  posts: IPost[];
}

const SearchBar: FC<PostsList> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<IPost[]>([]);

  const onChangeHandler = (text: string) => {
    let matches: IPost[] = [];
    if (text.length > 0) {
      matches = posts.filter((post) => {
        const regex = new RegExp(`${text}`, "gi");
        return post.title.match(regex);
      });
    }

    setSuggestions(matches);
    setSearchTerm(text);
  };

  const onBlurHandler = () => {
    setTimeout(() => {
      setSuggestions([]);
    }, 100);
  };

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const text: string = (e.target as HTMLSpanElement).innerText;
    const chosenPost = posts.find((post) => post.title === text);
    setSearchTerm("");

    setTimeout(() => {
      if (!!chosenPost) {
        showInfoAboutPost(chosenPost);
      }
    }, 300);
  };

  return (
    <div className={cx("searchBar", "searchBar__container")}>
      <input
        type="text"
        onChange={(e) => onChangeHandler(e.target.value)}
        onBlur={onBlurHandler}
        value={searchTerm}
        className={cx("searchBar__input")}
      />
      {suggestions &&
        suggestions.map((suggestion) => (
          <div
            onClick={onClickHandler}
            className={cx("searchBar__suggestion")}
            key={suggestion.id}
          >
            {suggestion.title}
          </div>
        ))}
    </div>
  );
};

const showInfoAboutPost = (post: IPost) => {
  const chosenPost = JSON.stringify(post, null, 2);
  alert(chosenPost);
};

export default SearchBar;
