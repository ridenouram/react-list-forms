import React, { Component } from 'react';
import Sidebar from './Sidebar';
import styles from './Sidebar.css';

const linkText = {
  dog: 'checkout this cool dog',
  cat: 'meow',
  snake: 'sneaky snek',
  fish: 'freddie fish'
};

export default class App extends Component {
  state = {
    selected: 'dog'
  }

  handleChange = ({ target }) => {
    this.setState({ selected: target.name });
  }

  render() {
    const { selected } = this.state;
    return (
      <container className={styles.Container}>
        <Sidebar>
          <a href="#" name="dog" onClick={this.handleChange}>Dog</a>
          <a href="#" name="cat" onClick={this.handleChange}>Cat</a>
          <a href="#" name="snake" onClick={this.handleChange}>Snake</a>
          <a href="#" name="fish" onClick={this.handleChange}>Fish</a>
        </Sidebar>
        <p>{linkText[selected]}</p>
      </container>
    );
  }
}
