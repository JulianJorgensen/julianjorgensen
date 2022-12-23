import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Cta from 'components/Cta';
import { fonts } from 'utils/variables';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;
  width: 100%;
  padding: 40px;
  height: 300px;
  font-family: ${fonts.primary};
`

const LeftCol = styled.div`
  position: relative;
`

const RightCol = styled.div`
  padding-left: 40px;
`


const Nav = styled.nav`
  display: flex;
  margin-bottom: 20px;
`

const NavItem = styled.div`
  margin-right: 20px;
  font-size: 20px;

  &:last-child {
    margin-right: 0;
  }
`

const ContactUs = styled.div`
`

const Headline = styled.div`
  font-size: 30px;
`

const Subheadline = styled.div`
  font-size: 30px;
  opacity: 0.6;
  margin-bottom: 20px;
`

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    margin-left: 15px;
    path {
      fill: white;
    }
  }
`

export default class Footer extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <LeftCol>
          <ContactUs>
          <Headline>Self. massage robotics</Headline>
            <Subheadline>Wellness to every body</Subheadline>
            <Cta label="Read more" href="http://www.selftime.io" white />
          </ContactUs>
        </LeftCol>
      </Wrapper>
    );
  }
}
