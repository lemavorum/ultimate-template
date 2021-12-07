import React from 'react';
import LightBulbOff from '@assets/images/light-bulb-off.svg';
import styles from './styles.module.scss';

export const Welcome = () => (
  <>
    <LightBulbOff />
    <div className={styles.content}>
      <div className={styles.welcome}>ULTIMATE TEMPLATE</div>
    </div>
  </>
);
