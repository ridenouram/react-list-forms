import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  state = {
    error: false
  };

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    if(this.state.error) {
      return <h3>this component errored</h3>;
    }
    return this.props.children;
  }
}
