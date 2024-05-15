import React from 'react';
import {getRandomColor } from '../utility/randomColors';

interface CounterProps {
  count: number;
}

const Counter: React.FC<CounterProps> = ({ count }) => {
  return (
    <div className="counter">
      <h2>Counter</h2>
      <p style={{ color: getRandomColor() }}>{count}</p>
    </div>
  );
};

export default Counter;
