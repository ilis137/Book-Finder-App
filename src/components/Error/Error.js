import React from "react";
import styles from "./Error.module.css";

const Error = props => {
  console.log(props.error);
  return (
    <div>
      <h2 className={styles.error}>{props.error}</h2>{" "}
    </div>
  );
};

export default Error;
