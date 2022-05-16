import Meals from './Components/Meals/Meals';
import React from 'react';
import './App.css';
import Header from './Components/Layout/Header'
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <React.Fragment>
      <Cart/>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
