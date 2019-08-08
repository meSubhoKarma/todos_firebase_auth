import ReactDom from "react-dom";
import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import theme from "./utils/theme";
import GlobalStyles from "./utils/global";

import App from "./App";

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <App />
          <GlobalStyles />
        </>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
