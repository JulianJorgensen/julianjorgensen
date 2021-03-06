import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import styled from 'styled-components';
import { scroller } from 'react-scroll'
import { easings, meta } from 'utils/variables';
import Footer from 'components/Footer';
import media from "styled-media-query";
import withAnalytics from 'utils/withAnalytics';

const Wrapper = styled.div`
  position: absolute;
  top: 50vh;
  background-color: white;
  overflow: hidden;
  width: 100%;

  ${media.greaterThan('medium')`
    top: 100vh;
  `}
`

const ScrollCta = styled.a`
  text-align: center;
  display: block;
  padding: 50px 0;
  text-transform: uppercase;
  cursor: pointer;
`

const Content = styled.div`
  position: relative;
  width: calc(100% - 10vw);

  img {
    max-width: 100%;
  }
`

@withAnalytics
@connect((store) => ({
  store,
}))
export default class Page extends Component {
  constructor() {
    super();

    this.handleOnScrollCtaClick = this.handleOnScrollCtaClick.bind(this);
  }

  handleOnScrollCtaClick() {
    scroller.scrollTo('more', {
      duration: 800,
      smooth: "easeOutQuad",
    });
  }

  render() {
    const { children, isCase, store: { activeSlide, usePrevAsNextSlide }, ...otherProps } = this.props;

    const renderHead = () => {
      if (!isCase) return;

      return (
        <Head>
          <title>Case {activeSlide.slug} - {meta.title}</title>
        </Head>
      )
    }

    return (
      <Wrapper usePrevAsNextSlide={usePrevAsNextSlide} {...otherProps}>
        {renderHead()}
        <Content id="more">
          {children}
        </Content>
        <Footer />
      </Wrapper>
    )
  }
}