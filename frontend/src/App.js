/**
 * This class acts as a high-level, "wrapper" React Component.
 */
import React from 'react';
import Overlay from './Components/Overlay';
import LoginForm from './Components/LoginForm';
import FormErrors from './Components/FormErrors';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <LoginForm />
    </div>
    )
  }
}

export default App;
