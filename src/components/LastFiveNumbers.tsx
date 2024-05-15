import React from 'react';
import { assignColors } from '../utility/randomColors';

interface LastFiveNumbersProps {
  numbers: number[];
}

const LastFiveNumbers: React.FC<LastFiveNumbersProps> = ({ numbers }) => {
  const colorMap = assignColors(numbers);

  return (
    <div className="last-five-numbers">
      <h2>Last 5 Numbers</h2>
      <ul className="horizontal-list">
        {numbers.map((number, index) => (
          <li key={index} style={{ color: colorMap[number] }}>
            {number}{index < numbers.length - 1 ? ',' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastFiveNumbers;
