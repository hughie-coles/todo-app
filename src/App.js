import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router';
import Listing from './components/listview/Listing';
import Edit from './components/shared/Edit';
import { BrowserRouter } from 'react-router-dom';



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
      <Switch>
          <Route path='/edit/:id' render={ (p) => {
                                                          p.updateCards = updateCardsWithStorage;
                                                          p.cards = cards; //make sure the cards are added before the props are spread
                                                          return <Edit {...p} /> } 
                                                  }/>
          <Route path='/create' render={() => <Edit cards={cards} updateCards={updateCardsWithStorage} /> }  />
          <Route path='/' render={() => <Listing cards={cards} updateCards={updateCardsWithStorage} /> } />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
