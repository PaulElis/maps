// PART 1 - Routing
// Section 1
// Implement the router with react-router-dom
// https://reactrouter.com/
// The lib is installed, all you need to do is import it

// Requirements:
// Home component only renders for path /

// Retailer component only renders for path /retailerType/:wmid
// where retailerType is dispensaries | deliveries | doctors

import React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/";
import Retailer from "./pages/retailer";
import { useGlobal, GlobalContext } from "./context";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const queryCache = new QueryCache();
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    font-family: sans-serif;
  }
`;

function ContextWrapper() {
  const globalValues = useGlobal();

  return (
    <Router>
      <Switch>
        <GlobalContext.Provider value={globalValues}>
          <ReactQueryCacheProvider queryCache={queryCache}>
            <GlobalStyle />
            <Route exact path="/" component={Home} />
            <Route
              path={`/retailerType=dispensaries/:wmid`}
              component={Retailer}
            />
            <Route
              path={`/retailerType=deliveries/:wmid`}
              component={Retailer}
            />
            <Route path={`/retailerType=doctors/:wmid`} component={Retailer} />
          </ReactQueryCacheProvider>
        </GlobalContext.Provider>
      </Switch>
    </Router>
  );
}

render(<ContextWrapper />, document.getElementById("root"));
