import React from 'react';
import Calendar from '../Calendar/Calendar';
import GoogleAuth from '../GoogleAuth/GoogleAuthContainer';

const App = () => (
  <div>
    <GoogleAuth>
      <Calendar />
    </GoogleAuth>
  </div>
);

export default App;
