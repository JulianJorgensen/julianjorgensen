import React, { Component } from 'react';
import styled from 'styled-components';
import { colors, fonts, easings } from 'utils/variables';

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 40px;
  bottom: 40px;
  width: 60vw;
  opacity: 0;
  transition: opacity 0.2s;
  ${props => props.fontsLoaded && `
    opacity: 1;
  `}
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
  font-size: 140px;
  line-height: 110px;
  margin-bottom: 10px;
  font-weight: 800;
  font-family: ${fonts.primary};
  text-transform: uppercase;
  color: ${props => props.contentColor};
`

const SubTitle = styled.h2`
  font-size: 26px;
  color: ${colors.gray50};
  font-weight: 300;
  font-family: ${fonts.secondary};
  margin-top: 6px;
`

export default class LowerLeftContent extends Component {
  render() {
    const { fontsLoaded, isActive, title, subtitle, onCtaClickHandler, contentColor } = this.props;

    return (
      <Wrapper fontsLoaded={fontsLoaded}>
        <Content isActive={isActive}>
          <Header innerRef={div => this.headerEl = div}>
            <Title contentColor={contentColor}>{title}</Title>
            <SubTitle contentColor={contentColor}>{subtitle}</SubTitle>
          </Header>
        </Content>
      </Wrapper>
    )
  }
}