import React from "react";
import { render } from "react-dom";
import { App } from "./components/App";
import styles from './styles.module.scss';

render(<App className={styles.app}/>, document.getElementById("root"));
