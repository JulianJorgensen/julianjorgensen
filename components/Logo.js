import React from 'react';
import styled from 'styled-components';
import Logo from 'assets/svgs/julian-jorgensen-logo.svg';

const Wrapper = styled.div`
  user-select: none;
`

const StyledLogo = styled(Logo)`
  width: 50px;
  height: 50px;
`

export default (props) => (
  <Wrapper {...props}><StyledLogo /></Wrapper>
);
