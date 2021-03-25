import React from "react";
import { withRouter } from "next/router";
import Head from "next/head";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Map from "components/Map";

import configureStore from "../services/configureStore";
import theme from "../common/theme";
import "../styles/globals.css";

const store = configureStore();

function App(props) {
  const { Component, pageProps, router } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  console.log(router.pathname);
  return (
    <Provider store={store}>
      <Head>
        <title>NomadVille - Funnel</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Box component="div" visibility={router.pathname === "/matcher" ? "visible" : "hidden"}>
          <Map />
        </Box>

        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default withRouter(App);
