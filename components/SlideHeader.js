import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Cta from 'components/Cta';
import { colors, fonts } from 'utils/variables';

const Wrapper = styled.div`
  width: 500px;
  height: 250px;

  ${props => props.white && `
    color: white;
  `}

  ${props => props.black && `
    color: black;
  `}

  ${media.lessThan('medium')`
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  `}
`

const Title = styled.h2`
  font-family: ${fonts.condensed};
  font-size: 70px;
  text-transform: uppercase;
`

export default ({ title, lead, cta, children, ...props }) => (
  <Wrapper {...props}>
    <Title {...props}>{ title }</Title>
    <p>{ lead }</p>
    {children}
    <Cta white label="Read more" />
  </Wrapper>
);
