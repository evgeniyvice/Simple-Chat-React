import React from 'react';

import Chat from './chat'
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        {/* <Title /> */}
        
        <Chat />
     </div>
    )
  }
}

export default App;
