import React from 'react';
import styles from './quality.module.css'

const Quality = ({color, name }) => {
  return (
    <span className={`badge bg-secondary flex-row gap-5 bg-${color} ${styles.badge}`}>{name}</span>
  );
}

Quality.defaultProps = {
  color: 'primary',
  name: ""
}

export default Quality;