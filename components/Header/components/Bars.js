import React from 'react';
import media from 'styled-media-query';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  z-index: 100;
  width: 40px;
  height: 40px;
  cursor: pointer;

  ${media.lessThan('medium')`
    display: none;
  `}

  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 6px;
    height: 3px;
    width: 30px;
    background-color: ${props => props.contentColor};
    transition: all 0.3s ease;
  }

  &:before {
    transform: translateY(4px);
  }
  &:after {
    transform: translateY(-4px);
  }

  ${props => props.active && `
    &:after,
    &:before {
      background-color: white;
    }
    &:before {
      transform: rotate(45deg) translateY(0);
    }
    &:after {
      transform: rotate(-45deg) translateY(0);
    }
  `}
`
export default (props) => (
  <Wrapper {...props} />
);
