import React from "react";
import { Col, Preloader } from "react-materialize";
const Loader = () => {
  return (
    <Col
      s={12}
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <Preloader size="big" color="green" />
    </Col>
  );
};

export default Loader;
