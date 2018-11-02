import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from "./layouts/Layout";
import Home from "./pages/Home";

// Routingの定義
const appRouting = (
  <Router>
    <Layout>
      <Route path="/" component={Home} />
    </Layout>
  </Router>
);

// Applicationをrendering
render(appRouting, document.getElementById("app"));
