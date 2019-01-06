import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import InstagramIcon from 'assets/icons/FontAwesome/brands/instagram.svg';
import VimeoIcon from 'assets/icons/FontAwesome/brands/vimeo.svg';
import FacebookIcon from 'assets/icons/FontAwesome/brands/facebook.svg';
import Logo from 'components/Logo';
import Cta from 'components/Cta';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;
  width: 100%;
  padding: 40px;
  height: 300px;
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
            <Headline>Got a project?</Headline>
            <Subheadline>Let's talk</Subheadline>
            <a href="mailto:jj@julianjorgensen.com"><Cta label="Contact me" white /></a>
          </ContactUs>
        </LeftCol>
        {/* <RightCol>
          <Nav>
            <NavItem><Link href="/about"><a>Frontend & UX</a></Link></NavItem>
            <NavItem><Link href="/work"><a>About</a></Link></NavItem>
            <NavItem><Link href="/contact"><a>Contact</a></Link></NavItem>
          </Nav>
          <SocialMediaIcons>
            <Link href="/privacy"><a>Privacy</a></Link>
            <a href="http://www.instagram.com/explore/tags/thankyouculture/" target="new"><InstagramIcon /></a>
            <a href="http://facebook.com/thankyoustudio/" target="new"><FacebookIcon /></a>
          </SocialMediaIcons>
        </RightCol> */}
      </Wrapper>
    );
  }
}
