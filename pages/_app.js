import '../styles/globals.css';
import { Provider } from 'react-redux';
import configureStore from '../src/services/configureStore';

function MyApp({ Component, pageProps }) {

  const store = configureStore();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

// import NextApp from 'next/app'
// import React from 'react'
// import { ThemeProvider } from 'styled-components'
// const theme = {
//   primary: 'green',
// }
// export default class App extends NextApp {
//   // remove it here
//   componentDidMount() {
//     const jssStyles = document.querySelector('#jss-server-side')
//     if (jssStyles && jssStyles.parentNode)
//       jssStyles.parentNode.removeChild(jssStyles)
//   }
//   render() {
//     const { Component, pageProps } = this.props
//     return (
//       <ThemeProvider theme={theme}>
//         <Component {...pageProps} />
//       </ThemeProvider>
//     )
//   }
// }