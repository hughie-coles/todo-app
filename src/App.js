import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router';
import Edit from './components/shared/Edit';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard'

function App() {

  let loadedCards = localStorage.getItem('cards');
  loadedCards = loadedCards ? JSON.parse(loadedCards) : [];

  console.log(loadedCards);
  const [cards, updateCards] = React.useState(loadedCards);

  const updateCardsWithStorage = (cards) => {
    console.log("Storing cards");

    localStorage.setItem('cards', JSON.stringify(cards));
    updateCards(cards);
    console.log(localStorage.getItem('cards'));
  }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
          <Route path='/edit/:id' render={ (p) => {
                                                          p.updateCards = updateCardsWithStorage;
                                                          p.cards = cards; //make sure the cards are added before the props are spread
                                                          return <Edit {...p} /> } 
                                                  }/>
          <Route path='/copy/:id' render={ (p) => {
                                                          p.updateCards = updateCardsWithStorage;
                                                          p.cards = cards; //make sure the cards are added before the props are spread
                                                          return <Edit {...p} isCopy={true} /> } 
                                                  }/>
          <Route path='/create' render={() => <Edit cards={cards} updateCards={updateCardsWithStorage} /> }  />
          <Route path='/' render={() => <Dashboard cards={cards} updateCards={updateCardsWithStorage} /> } />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
