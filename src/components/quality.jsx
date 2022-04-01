import React from 'react';
import styles from './quality.module.css'

const Quality = ({color, name, id }) => {
  return (
    <span  key={id} className={`badge flex-row gap-5 bg-${color} ${styles.badge}`}>{name}</span>
  );
}

Quality.defaultProps = {
  color: 'primary',
  name: ""
}

export default Quality;