import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import withReduxStore from 'store/with-redux-store';
import { Provider } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Layout from 'components/Layout';
import { meta, fonts } from 'utils/variables';
import favicon from 'assets/images/favicon.ico';

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
            <TransitionGroup component={null}>
              <CSSTransition
                key={this.props.router.route}
                classNames='fade'
                timeout={500}
              >
                <Component {...pageProps} />
              </CSSTransition>
            </TransitionGroup>
          </Layout>
        </Provider>
        <style jsx global>{`
          .fade-enter {
            position: absolute;
            opacity: 0;
            width: 0;
            transition: opacity 0, width 0.5s;
          }

          .fade-enter-active {
            position: absolute;
            opacity: 1;
            width: 100%;
            transition: opacity 0.5s, width 0.5s;
          }

          .fade-exit {
            position: absolute;
            transform: translateX(0);
            opacity: 1;
            transition: all 0;
          }

          .fade-exit-active {
            position: absolute;
            transform: translateX(-100px);
            opacity: 1;
            transition: all 0.5s ease-in;
          }
          
          .fade-exit-active.stand-alone-page {
            opacity: 0;
          }


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
        `}</style>
      </Container>
    )
  }
}
