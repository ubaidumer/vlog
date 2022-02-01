import React from 'react';
import { Hero } from './components';

const SignInView = ({ themeMode }) => {
  return (
    <div>
      <Hero themeMode={themeMode} />
    </div>
  );
};

export default SignInView;
