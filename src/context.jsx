// context.js
import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

// self 是对 <Provider> 组件实例的引用
let self = null;

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    self = this;
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.element.isRequired
};

const { Consumer } = AppContext;

function getState() {
  if (!self) {
    console.warn('cannot getState() because <Provider> is not initialized');
    return {};
  }
  return self.state;
}

function setState(...args) {
  if (self) {
    self.setState(...args);
  } else {
    console.warn('cannot setState() because <Provider> is not initialized');
  }
}

function createStore() {
  return { getState, setState };
}

export { Provider, Consumer, createStore };
