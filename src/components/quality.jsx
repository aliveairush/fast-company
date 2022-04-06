import React from "react";
import styles from "./quality.module.css";
import PropTypes from "prop-types";

const Quality = ({color, name}) => {
  return (
    <span className={`badge flex-row gap-5 bg-${color} ${styles.badge}`}>{name}</span>
  );
};

Quality.defaultProps = {
  color: "primary",
  name: ""
};

Quality.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Quality;
