import React from 'react';
import Colors from './Colors';

export default function App() {
  const colors = [
    { name: 'green', hex:'#339b1b', rgb: { r: 51, g: 155, b: 27 } },
    { name: 'blue', hex:'#60b2e5', rgb: { r: 96, g: 178, b: 229 } },
    { name: 'purple', hex:'#7f57e5', rgb: { r: 127, g: 87, b: 229 } },
    { name: 'orange', hex:'#e5ac57', rgb: { r: 229, g: 172, b: 87 } },
  ];

  return (
    <Colors colors={colors} />
  );
}
