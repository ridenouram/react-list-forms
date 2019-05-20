import React, { PureComponent } from 'react';

export default class TextFormatter extends PureComponent {
  state = {
    text: '',
    color: 'black'
  };

  //change handlers
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { text, color } = this.state;

    return (
      <form>
        <input type="text" name="text" value={text} onChange={this.handleChange} />
        <input type="color" name="color" value={color} onChange={this.handleChange} />
        <p style={{ color: color }}>{text}</p>
      </form>
    );
  }
}
