import React from 'react';

interface LastFiveNumbersProps {
  numbers: number[];
}

const LastFiveNumbers: React.FC<LastFiveNumbersProps> = ({ numbers }) => {
  return (
    <div className="last-five-numbers">
      <h2>Last 5 Numbers</h2>
      <ul className="horizontal-list">
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default LastFiveNumbers;
