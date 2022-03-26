import React from 'react';
import styles from './badge.module.scss'

const Badge = ({color, name }) => {
  return (
    <span className={`badge bg-secondary flex-row gap-5 bg-${color} ${styles.badge}`}>{name}</span>
  );
}

Badge.defaultProps = {
  color: 'primary',
  name: ""
}

export default Badge;