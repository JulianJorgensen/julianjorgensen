import actionTypes from 'store/types';
import SlideItems from 'store/slideItems';
import { standAlonePages } from 'utils/variables';

export const updateActiveSlide = (slug) => dispatch => {
  let slide = {};

  if (slug) {
    slide = SlideItems.find(obj => obj.slug.toLowerCase() == slug.toLowerCase());

    if (slide) {
      slide.index = SlideItems.findIndex(obj => obj === slide);
    } else {
      // no slide found, it must be a standalone one
      slide = standAlonePages.find(obj => obj.slug === slug);
      slide.index = 0;
    }
  } else {
    slide = SlideItems[0];
    slide.index = 0;
  }

  return dispatch({
    type: actionTypes.UPDATE_ACTIVE_SLIDE,
    slide
  });
}

export const updatePrevSlide = (slide) => dispatch => {
  return dispatch({
    type: actionTypes.UPDATE_PREV_SLIDE,
    slide
  });
}

export const setUsePrevAsNextSlide = (usePrevAsNextSlide) => dispatch => {
  return dispatch({ 
    type: actionTypes.SET_USE_PREV_AS_NEXT_SLIDE,
    usePrevAsNextSlide
  })
}

export const hideActiveSlide = (activeSlideHidden) => dispatch => {
  return dispatch({ 
    type: actionTypes.HIDE_ACTIVE_SLIDE,
    activeSlideHidden: activeSlideHidden
  })
}

export const setHeaderSolid = (solid) => dispatch => {
  return dispatch({ 
    type: actionTypes.SET_HEADER_SOLID,
    solid
  })
}

export const setAutoScroll = (autoScroll) => dispatch => {
  return dispatch({ 
    type: actionTypes.SET_AUTO_SCROLL,
    autoScroll
  })
}

export const setHasMouseLeftNextSlide = (hasMouseLeftNextSlide) => dispatch => {
  return dispatch({ 
    type: actionTypes.SET_HAS_MOUSE_LEFT_NEXT_SLIDE,
    hasMouseLeftNextSlide
  })
}

export const setIsScrollNSliding = () => dispatch => {
  setTimeout(() => {
    return dispatch({ 
      type: actionTypes.SET_IS_SCROLL_N_SLIDING,
      isScrollNSliding: false
    });
  }, 500);

  return dispatch({ 
    type: actionTypes.SET_IS_SCROLL_N_SLIDING,
    isScrollNSliding: true
  })
}

export const toggleMobileNav = () => dispatch => {
  return dispatch({ type: actionTypes.TOGGLE_MOBILE_NAV })
}

export const closeMobileNav = () => dispatch => {
  return dispatch({ type: actionTypes.CLOSE_MOBILE_NAV })
}

export const confirmFontsLoaded = () => dispatch => {
  return dispatch({ type: actionTypes.CONFIRM_FONTS_LOADED })
}
