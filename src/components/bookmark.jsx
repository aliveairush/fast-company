import React from "react";
import {ReactComponent as UncheckedBookmarkSvg} from "../assets/icons/bookmark-unchecked.svg";
import {ReactComponent as CheckedBookmarkSvg} from "../assets/icons/bookmark-checked.svg";
import styles from "./bookmark.module.css";
import PropTypes from "prop-types";

const Bookmark = ({value, onClick}) => {

  return (<span className={styles.bookmark}>
    {value ? <CheckedBookmarkSvg onClick={onClick}/> : <UncheckedBookmarkSvg onClick={onClick}/>}
  </span>);
};

Bookmark.defaultProps = {
  value: false,
};

Bookmark.propTypes = {
  value: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default Bookmark;
