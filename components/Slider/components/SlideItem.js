import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import LandingSlide from './LandingSlide';
import { colors, fonts, easings } from 'utils/variables';
import media from "styled-media-query";

const Wrapper = styled.div`
  width: 100%;
  z-index: 3;
  opacity: 1;
  pointer-events: auto; 
`
export default ({ isPrevious, isNext, onMouseOut, isActiveSlideHidden, onClickHandler, hasMouseLeftNextSlide, isScrollNSliding, ...props }) => {
  let styles = {};

  return (
    <Wrapper
      isActive={props.isActive}
      isPrevious={isPrevious}
      isNext={isNext}
      isSliding={props.isSliding}
      contentColor={props.contentColor}
      background={props.background}
      hasMouseLeftNextSlide={hasMouseLeftNextSlide}
      onMouseOut={onMouseOut}
      isActiveSlideHidden={isActiveSlideHidden}
      onClick={onClickHandler}
      className={props.isActive ? 'wrapper is-active' : 'wrapper'}
      style={styles}
    >
      <LandingSlide {...props} />
    </Wrapper>
  )
}