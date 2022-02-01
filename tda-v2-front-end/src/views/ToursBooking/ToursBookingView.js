import React from 'react';
import { Hero, Form } from './components';

const ToursBookingView = ({ themeMode }) => {
  return (
    <div>
      <Hero themeMode={themeMode} />
      <Form />
    </div>
  );
};

export default ToursBookingView;
