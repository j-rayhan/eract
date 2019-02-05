// @flow
import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import './App.css';

type props = {
  changePage: any
};

const Home = props => (
  <div className="App">
    <a>Learn React</a>
    <ButtonExampleEmphasis {...props} />
  </div>
);

const ButtonExampleEmphasis = props => (
  <div>
    <Button primary onClick={() => props.changePage('/login')}>
      Primary
    </Button>
    <Button secondary onClick={() => props.changePage('/sing-up')}>
      Secondary
    </Button>
  </div>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: e => push(e)
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Home);
