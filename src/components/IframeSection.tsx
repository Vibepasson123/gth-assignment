import React, { useEffect } from 'react';

interface IframeSectionProps {
  onMessage: (number: number) => void;
}

const IframeSection: React.FC<IframeSectionProps> = ({ onMessage }) => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === "https://assets.skilldnsproc.com" && event.data.randomNumber) {
        onMessage(event.data.randomNumber);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [onMessage]);

  return (
    <div className="iframe-section">
      <h2>Iframe</h2>
      <iframe
        src="https://assets.skilldnsproc.com/career/home-task/random.html"
        width="300"
        height="200"
        title="random-number-iframe"
      ></iframe>
    </div>
  );
};

export default IframeSection;
