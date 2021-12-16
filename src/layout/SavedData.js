import React, { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import SocialMedia from "./SocialMedia";

export class SavedData extends Component {
  render() {
    return (
      <div>
        <SocialMedia />
        <br />
        <table class="table table-sm border rounded-pill">
          <thead>
            <tr class="table-active">
              <th scope="col" class=" p-3 ">
                SAVED DATA
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="rowheight">
              <th class="p-3" scope="row">
                1
              </th>
              <td class="p-3">Mark</td>
              <td class="p-3">Otto</td>
              <td class="p-3">
                <Button>DELETE</Button>
              </td>
              <td>@mdo</td>
            </tr>
            <tr class="rowheight">
              <th class="p-3" scope="row">
                2
              </th>
              <td class="p-3">Jacob</td>
              <td class="p-3">Thornton</td>
              <td class="p-3">
                <Button>DELETE</Button>
              </td>

              <td class="p-3">@fat</td>
            </tr>
            <tr class="table-active">
              <td class="p-3">
                <Button>BACK</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SavedData;
