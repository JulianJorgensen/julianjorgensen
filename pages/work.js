import React, { Component } from 'react';
import Footer from 'components/Footer';
import styled from 'styled-components';
import Work from 'components/Work';

const Wrapper = styled.div`
`

const PageTitle = styled.h1`
  position: absolute;
  font-size: 70px;
  transform: rotate(-90deg);
  transform-origin: left bottom;
  margin-top: 100px;
  margin-left: 20px;
  opacity: 0.3;
  text-transform: uppercase;
  font-size: 48px;
`

const Content = styled.div`
  padding: 200px 80px;
  background-color: black;
  color: white;
  width: 90vw;
`

const Header = styled.div`
  margin-bottom: 250px;
`

export default class WorkPage extends Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <PageTitle>Work</PageTitle>
          <Header></Header>
          <Work />
        </Content>

        <Footer />
      </Wrapper>
    )
  }
}