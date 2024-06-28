import React from 'react';
import { useState } from 'react';

const useToggle = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);
  const toggle = () => {
    setState((previous) => !previous)
  };
  return (
    [state, toggle]
  );
};

export default useToggle;

