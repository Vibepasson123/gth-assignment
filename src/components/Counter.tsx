import React from 'react';

interface CounterProps {
  count: number;
}

const Counter: React.FC<CounterProps> = ({ count }) => {
  return (
    <div className="counter">
      <h2>Counter</h2>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
