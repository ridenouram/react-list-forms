import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CreateColor extends PureComponent {
  static propTypes = {
    addColor: PropTypes.func.isRequired
  };

  state = {
    name: '',
    hex: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, hex } = this.state;
    this.props.addColor({ name, hex: hex });  
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { name, hex } = this.state;

    return (
      <form>
        <input type="text" name="name" value={name} onChange={this.handleChange}></input>
        <input type="color" name="hex" value={hex} onChange={this.handleChange}></input>
        <button>Submit</button>
      </form>
    );
  }
}
 