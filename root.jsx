import React from 'react';
import Clock from './frontend/clock';
import Weather from './frontend/weather';

class Root extends React.Component {
  render (){
    return (
      <body className="root">
        <Clock/>
        <Weather/>
      </body>

    );
  }
}

export default Root;
