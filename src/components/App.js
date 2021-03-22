import React from 'react';
import Translate from './Translator/Translate';

const App = () => {
  return (
    <div className="container">
      <h1 className="ui center aligned header">Google API Translator</h1>
      <Translate />
    </div>
  );
};

export default App;
