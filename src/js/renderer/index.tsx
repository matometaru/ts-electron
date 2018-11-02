import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

// Routingの定義
const appRouting = (
  <Router>
    <Layout>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
    </Layout>
  </Router>
);

// Applicationをrendering
render(appRouting, document.getElementById("app"));
