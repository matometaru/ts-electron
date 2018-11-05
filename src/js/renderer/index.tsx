import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import { AppContainer } from 'react-hot-loader'

// Routingの定義
const appRouting = (
  <AppContainer>
    <Router>
      <Layout>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
      </Layout>
    </Router>
  </AppContainer>
);

if (module.hot) {
  module.hot.accept();
}

// Applicationをrendering
render(appRouting, document.getElementById("app"));
