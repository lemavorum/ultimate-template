import React from 'react';
import { Welcome } from '@components/welcome/Welcome';
import styles from './styles.module.scss';

export const App = () => (
  <section className={styles.app}>
    <Welcome />
  </section>
);
