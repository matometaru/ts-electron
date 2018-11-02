import * as React from "react";
import { Link } from "react-router-dom";

export default class Layout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <div className="page">{children}</div>
      </div>
    );
  }

}
