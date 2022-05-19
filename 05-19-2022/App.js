import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import Demo from './components/Demo/Demo';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('Now in app');

  const ParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>

   {/* {showParagraph && <p>This is My paragraph</p>} */}
      <Demo show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={ParagraphHandler}>Paragraph!</Button>
    </div>
  );
}

export default App;
