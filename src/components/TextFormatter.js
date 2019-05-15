import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TextFormatter extends PureComponent {
  state = {
    text: '',
    color: 'black'
  };

  //change handlers
  handleTextChange = ({ target }) => {
    this.setState({ text: target.value });
  }

  handleColorChange = ({ target }) => {
    this.setState({ color: target.value });
  }

  render() {
    const { text, color } = this.state;

    return (
      <form>
        <input type="text" name="text" value={text} onChange={this.handleTextChange} />
        <input type="color" name="color" value={color} onChange={this.handleColorChange} />
        <p style={{ color: color }}>{text}</p>
      </form>
    );
  }
}
