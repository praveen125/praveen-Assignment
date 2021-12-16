import React, { Component } from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";

import RightIcon from "../Assets/RIGHT.svg";
import LeftIcon from "../Assets/chevron-left.svg";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import NavBar from "./NavBar";

import axios from "axios";
import SocialMedia from "./SocialMedia";
import StockTable from "./StockTable";
import SavedData from "./SavedData";

export class Quikie extends Component {
  state = {
    // dataloaded: false,
  };
  componentDidMount() {
    axios(
      "https://api.nomics.com/v1/prices?key=faafef1c025265a112cc54556c9d88f8342b97e4"
    )
      .then((data) => console.log(data.currency))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="quikies">
        <NavBar />
        <Col className="w-75 mx-auto">
          <SocialMedia className="margin" />
          <br />
          <StockTable />
        </Col>
        <br />
        <NavBar />
        <br />
        <Col className="w-75 mx-auto">
          <SavedData />
        </Col>
      </div>
    );
  }
}

export default Quikie;
