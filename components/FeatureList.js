import styled from 'styled-components';
import media from 'styled-media-query';
import { fonts, colors } from 'utils/variables';

export const FeatureList = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 600px;

  ${props => props.white && `
    color: white;
  `}

  ${media.lessThan('medium')`
    top: auto;
    bottom: 0;
    right: auto;
    left: 50%;
    transform: translate(-50%);
  `}
`

export const Feature = styled.li`
  width: 50%;
  margin-bottom: 40px;
`

export const FeaturePreTitle = styled.span`
  font-size: 16px;
  font-family: ${fonts.secondary};
  font-weight: 300;
  color: ${props => props.dark ? colors.gray24 : colors.gray50};
`

export const FeatureTitle = styled.h3`
  font-size: 28px;
  font-weight: 800;
  text-transform: uppercase;
`
