import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {

  render() {

    return (
      <main className='main-container'>
        <h1 className='main-container__header'>
          Sign up for a course now
        </h1>
        <p className='main-container__subheader'>Fill in the form and get access for our online course for free!</p>
          <Form />
      </main>
    );
  }
}

export default App;
