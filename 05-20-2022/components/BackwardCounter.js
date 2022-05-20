import { useState, useEffect } from 'react';
import Card from './Card';
import useCounter from './useCounter';

const BackwardCounter = () => {
  const counter= useCounter();
  return <Card>{-counter}</Card>;
};

export default BackwardCounter;
