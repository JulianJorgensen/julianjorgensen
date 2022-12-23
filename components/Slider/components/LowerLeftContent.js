import React, { Component } from 'react';
import styled from 'styled-components';
import { colors, fonts, easings } from 'utils/variables';
import media from "styled-media-query";

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 40px;
  bottom: 40px;
  width: calc(100% - 80px);
`

const Content = styled.div`
  opacity: 0.5;
  transition: opacity 0.5s ${easings.easeInOutCustom};

  ${props => props.isActive && `
    opacity: 1;
  `}
`

const Header = styled.div`
  position: relative;
`

const Title = styled.h1`
  font-size: 13vw;
  line-height: 85%;
  margin-bottom: 10px;
  font-weight: 800;
  font-family: ${fonts.primary};
  text-transform: uppercase;
  color: ${props => props.contentColor};
  max-width: 800px;

  ${media.greaterThan('medium') `
    font-size: 120px;
  `}
`

const SubTitle = styled.h2`
  font-size: 5vw;
  color: ${colors.gray50};
  font-weight: 300;
  font-family: ${fonts.secondary};
  margin-top: 6px;
  max-width: 750px;

  ${media.greaterThan('medium') `
    font-size: 30px;
  `}
`

export default class LowerLeftContent extends Component {
  render() {
    const { fontsLoaded, isActive, title, subtitle, onCtaClickHandler, contentColor } = this.props;

    return (
      <Wrapper fontsLoaded={fontsLoaded}>
        <Content isActive={isActive}>
          <Header ref={div => this.headerEl = div}>
            <Title contentColor={contentColor}>{title}</Title>
            <SubTitle contentColor={contentColor}>{subtitle}</SubTitle>
          </Header>
        </Content>
      </Wrapper>
    )
  }
}
