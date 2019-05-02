import React, { Component } from "react";
import { removeObject, getObject } from "../utils";

export default class extends Component {
  logout = () => {
    removeObject("user");
    this.props.history.push("/login");
  };

  render() {
    return <h1 onClick={this.logout}>Welcome {getObject("user").name}</h1>;
  }
}
