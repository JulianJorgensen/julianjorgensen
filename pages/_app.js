import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import withReduxStore from 'store/with-redux-store';
import { Provider } from 'react-redux';
import Layout from 'components/Layout';
import { meta, fonts } from 'utils/variables';
import favicon from 'assets/images/favicon-32x32.png';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    font-family: ${fonts.secondary}, Helvetica, sans-serif;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: black;
  }

  body {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    border: 0;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: ${fonts.primary};
  }

  h1 {
    font-size: 80px;
  }

  h2 {
    font-size: 60px;
  }

  h3 {
    font-size: 40px;
  }

  p {
    line-height: 150%;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  button {
    outline: 0;
  }
`

@withReduxStore
export default class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href={favicon} />
          <link rel="canonical" href="https://www.julianjorgensen.com" />
          <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6281556/6972992/css/fonts.css" />
        </Head>
        <Provider store={reduxStore}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
        <GlobalStyle />
      </Container>
    )
  }
}
