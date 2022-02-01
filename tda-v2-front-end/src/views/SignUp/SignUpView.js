import React from 'react';
import { Hero } from './components';

const SignUpView = ({ themeMode }) => {
  return (
    <div>
      <Hero themeMode={themeMode} />
    </div>
  );
};

export default SignUpView;
