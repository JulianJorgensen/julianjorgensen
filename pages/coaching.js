import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import SlideHeader from 'components/SlideHeader';
import { FeatureList, Feature, FeaturePreTitle, FeatureTitle } from 'components/FeatureList';
import Cta from 'components/Cta';
import StandAlonePage from 'components/StandAlonePage';
import { colors } from 'utils/variables';
import BrainSyncImageSrc from 'assets/images/brain.png';

const Wrapper = styled.section`
  position: relative;
  background-color: white;
  padding: 200px 60px 120px 60px;
  display: flex;
`

const StyledSlideHeader = styled(SlideHeader)`
  margin-right: 250px;
`

const changeHue = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }

  50% {
    filter: hue-rotate(100deg);
  }

  100% {
    filter: hue-rotate(0deg);
  }
`;

const BrainSyncImage = styled.img`
  position: absolute;
  top: 400px;
  left: 320px;
  animation: ${changeHue} 12s linear infinite;
`

@connect()
export default class Coaching extends Component {
  render() {
    return (
      <StandAlonePage>
        <Wrapper>
          <StyledSlideHeader
            title="Coaching"
            lead="I upgrade frontend, design and UX teams while making them more cross-functional."
            cta="Read more"
          >
            <BrainSyncImage src={BrainSyncImageSrc} />
          </StyledSlideHeader>
          <FeatureList>
            <Feature>
              <FeaturePreTitle dark>Shared vocabulary</FeaturePreTitle>
              <FeatureTitle>Scale your code</FeatureTitle>
            </Feature>
            <Feature>
              <FeaturePreTitle dark>Shared vocabulary</FeaturePreTitle>
              <FeatureTitle>Scale your design</FeatureTitle>
            </Feature>
            <Feature>
              <FeaturePreTitle dark>Get more done</FeaturePreTitle>
              <FeatureTitle>Scale your team</FeatureTitle>
            </Feature>
            <Feature>
              <FeaturePreTitle dark>Frontend</FeaturePreTitle>
              <FeatureTitle>Improve quality</FeatureTitle>
            </Feature>
          </FeatureList>
        </Wrapper>
        </StandAlonePage>
    );
  }
}
