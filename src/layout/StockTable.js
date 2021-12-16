import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { AiOutlineRight, AiOutlineLeft, AiOutlineSearch } from "react-icons/ai";
import { GrSearch } from "react-icons/gr";

export default function StockTable() {
  return (
    <table class="table table-sm border rounded-pill">
      <thead>
        <tr className="rowheight ">
          <th className="p-3 ">stock Detail table</th>
          <th>
            <input className="search" placeholder=" seach company name" />
          </th>
        </tr>
        <tr class="tableheader table-active ">
          <th class="p-3 " scope="col">
            Company Name
          </th>
          <th class="p-3 " scope="col">
            SYMBOL
          </th>
          <th class="p-3 " scope="col">
            MARKET CAP
          </th>
          <th class="p-3 " scope="col"></th>
          <th class="p-3 " scope="col">
            CURRENT PRICE{" "}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="rowheight">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <Button>VIEW</Button>
          </td>
          <td>Otto</td>
        </tr>
        <tr class="rowheight ">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <Button>SAVED DATA</Button>
          </td>
          <td>Otto</td>
        </tr>
        <tr class="rowheight">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <Button>SAVED DATA</Button>
          </td>
          <td>Otto</td>
        </tr>
        <tr class="rowheight">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <Button>VIEW</Button>
          </td>
          <td>Otto</td>
        </tr>
        <tr class="rowheight">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <Button>SAVED DATA</Button>
          </td>
          <td>Otto</td>
        </tr>

        <tr class="d-flex justify-content-end table-active pgntnh">
          <td>
            1 of 267
            <AiOutlineLeft /> <AiOutlineRight />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
