import React, { PureComponent } from 'react';
import Colors from './Colors';
import CreateColor from './CreateColor';

export default class ColorList extends PureComponent {
  state = {
    colors: []
  }

  addColor = color => {
    const { colors } = this.state;
    colors.push(color);
  }
  
  render() {
    return (
    <>
      <CreateColor addColor={this.addColor}/>,
      {/* <Colors /> */}
    </>
    );
  }
}
