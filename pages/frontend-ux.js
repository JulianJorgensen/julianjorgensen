import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SlideHeader from 'components/SlideHeader';
import { FeatureList, Feature, FeaturePreTitle, FeatureTitle } from 'components/FeatureList';
import { colors } from 'utils/variables';
import Cta from 'components/Cta';
import StandAlonePage from 'components/StandAlonePage';
import BrainSyncImageSrc from 'assets/images/brain.png';
import { standAlonePages } from '../utils/variables';

const Wrapper = styled.div`
  position: relative;
  background: radial-gradient(circle at 60%, ${colors.bleuDeFrance} 30%, ${colors.cobalt} 100%);
  padding: 200px 60px 120px 60px;
`

const Grid = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(255,255,255,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.2) 1px,transparent 1px);
  background-size: 80px 80px,80px 80px,14px 14px,14px 14px;
  background-position: -2px -2px,-2px -2px,-1px -1px,-1px -1px;
  display: block;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
  position: absolute;
  right: 0;
  top: 0;
  mask-image: radial-gradient(white 0%, transparent 80%); 
  mask-mode: alpha;
`

@connect()
export default class Frontend extends Component {
  render() {
    return (
      <StandAlonePage>
      <Wrapper>
          <SlideHeader 
            title="Frontend & UX"
            lead="I combine development and UX. Top performance, functionality and beauty are my non-negotiable standards."
            cta="Read more"
            white
          >
          </SlideHeader>
          <FeatureList white>
            <Feature>
              <FeaturePreTitle>Modular frontend</FeaturePreTitle>
              <FeatureTitle>Architecture</FeatureTitle>
            </Feature>
            <Feature>
              <FeaturePreTitle>React, progressive</FeaturePreTitle>
              <FeatureTitle>React & Javascript</FeatureTitle>
            </Feature>
            <Feature>
              <FeaturePreTitle>Load speed performance</FeaturePreTitle>
              <FeatureTitle>Performance</FeatureTitle>
            </Feature>
            <Feature>
              <FeaturePreTitle>Frontend dev-ops &</FeaturePreTitle>
              <FeatureTitle>Design Systems</FeatureTitle>
            </Feature>
          </FeatureList>
          <Grid />
        </Wrapper>
        </StandAlonePage>
    );
  }
}
