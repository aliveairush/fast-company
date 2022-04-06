import React, {useState} from "react";
import {ReactComponent as UncheckedBookmarkSvg} from "../assets/icons/bookmark-unchecked.svg";
import {ReactComponent as CheckedBookmarkSvg} from "../assets/icons/bookmark-checked.svg";
import styles from "./bookmark.module.css";

const Bookmark = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => setIsChecked(!isChecked);

  return (<span className={styles.bookmark}>
    {isChecked ? <CheckedBookmarkSvg onClick={toggleCheck}/> : <UncheckedBookmarkSvg onClick={toggleCheck}/>}
  </span>);
};

export default Bookmark;
