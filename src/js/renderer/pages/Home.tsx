import * as React from "react";

export default class Home extends React.Component {
  click() {
    console.log("test");
    window.alert(location.href);
  }

  render() {
    return (
      <div>
        <p onClick={this.click}>HOME1234567!!!!!</p>
      </div>
    );
  }
}
