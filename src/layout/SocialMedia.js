import React from "react";
import { Row, Col } from "react-bootstrap";
import google from "../Assets/GOOGL.png";
import FB from "../Assets/FB.png";
import Amazon from "../Assets/AMZN.svg";

export default function SocialMedia() {
  return (
    <Row className="d-flex justify-content-between">
      <Col md={4}>
        <span
          style={{ backgroundColor: "aliceblue" }}
          class="m-1 card w-75  w-20 py-3 px-2 rounded d-flex flex-row justify-content-around  "
        >
          {" "}
          google
          <img className="google" src={google} alt="" />
        </span>
      </Col>
      <Col md={4} className="">
        <span
          class="m-1 card w-20 w-75 py-3 px-2 rounded d-flex flex-row justify-content-around"
          style={{ backgroundColor: "aliceblue" }}
        >
          <span>facebook</span>
          <img className="facebook" src={FB} alt="" />
        </span>
      </Col>
      <Col md={4}>
        <span
          class="m-1 card w-20 w-75 py-3 px-2 rounded d-flex flex-row justify-content-around"
          style={{ backgroundColor: "aliceblue" }}
        >
          Amazon
          <img className="amazon" src={Amazon} alt="" />
        </span>
      </Col>
    </Row>
  );
}
