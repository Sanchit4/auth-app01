import React, { Component } from "react";
class Loader extends Component {
  render() {
    return (
      <div class="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}
export default Loader;
