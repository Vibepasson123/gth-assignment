import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import LastFiveNumbers from './components/LastFiveNumbers';
import IframeSection from './components/IframeSection';

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [count, setCount] = useState<number>(0);

  const handleNewNumber = (number: number) => {
    setCount(prevCount => prevCount + number);
    setNumbers(prevNumbers => {
      const newNumbers = [number, ...prevNumbers];
      return newNumbers.length > 5 ? newNumbers.slice(0, 5) : newNumbers;
    });
  };

  return (
    <div className="app">
      <div className="left-section container">
        <LastFiveNumbers numbers={numbers} />
      </div>
      <div className="middle-section container">
        <Counter count={count} />
      </div>
      <div className="right-section container">
        <IframeSection onMessage={handleNewNumber} />
      </div>
    </div>
  );
};

export default App;
