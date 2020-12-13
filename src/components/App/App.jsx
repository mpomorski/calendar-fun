import React from 'react';
import Calendar from '../Calendar/CalendarContainer';
import GoogleAuth from '../GoogleAuth/GoogleAuthContainer';

const App = () => (
  <GoogleAuth>
    <Calendar />
  </GoogleAuth>
);

export default App;
