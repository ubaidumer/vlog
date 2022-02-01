import React from 'react';
import { Hero, Form } from './components';

const ClinicsBookingView = ({ themeMode }) => {
  return (
    <div>
      <Hero themeMode={themeMode} />
      <Form />
    </div>
  );
};

export default ClinicsBookingView;
