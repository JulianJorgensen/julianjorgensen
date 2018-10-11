import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SlideHeader from 'components/SlideHeader';
import PlaceholderImg from 'assets/images/clients-placeholder.png';

const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: white;
`

const Placeholder = styled.img`
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  width: 600px;
`

@connect()
export default class TeamSlide extends Component {
  render() {
    return (
      <Wrapper>
        <SlideHeader
          title="Our clients"
          lead="Design thinking is at the core of everything we do. The result is always fresh, vibrant and relevant."
          cta="Read more"
          href="/team"
        >
        </SlideHeader>
        <Placeholder src={PlaceholderImg} />
      </Wrapper>
    );
  }
}
