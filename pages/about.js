import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import styles from 'utils/styles';
import { switchToDarkContent } from 'store/actions';

const Wrapper = styled.div`
  ${styles.defaultWrapper};
`

@connect((store) => ({
  store,
}))
export default class Index extends React.Component {
  componentWillMount() {
    this.props.dispatch(switchToDarkContent());
  }

  render () {
    return (
      <Wrapper>
        <h1>about page</h1>
      </Wrapper>
    )
  }
}
