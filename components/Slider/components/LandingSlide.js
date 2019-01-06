import React, { Component } from 'react';
import styled from 'styled-components';
import PlayIcon from 'assets/icons/FontAwesome/regular/play-circle.svg';
import LowerleftContent from 'components/Slider/components/LowerLeftContent';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #F9F9F9;
  color: black;
`

const Content = styled.div`
  position: absolute;
  z-index: 4;
  right: 10vw;
  height: 100%;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const PlayReel = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;

  svg {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }

  opacity: 0;
  transition: opacity 0.2s;

  ${props => props.fontsLoaded && `
    opacity: 1;
  `}
`

export default class LandingSlide extends Component {
  render() {
    const { fontsLoaded } = this.props;

    return (
      <Wrapper>
        <LowerleftContent {...this.props} />
        <Content>
          <PlayReel fontsLoaded={fontsLoaded}><PlayIcon /> See my work</PlayReel>
        </Content>
      </Wrapper>  
    )
  }
}