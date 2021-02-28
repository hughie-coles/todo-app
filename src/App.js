import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router';
import Listing from './components/listview/Listing';
import Edit from './components/shared/Edit';
import { BrowserRouter } from 'react-router-dom';



function App() {
  const [cards, updateCards] = React.useState([
  ]);

  return (
    <BrowserRouter>
      <Switch>
          <Route path='/edit/:id' render={ (p) => {
                                                          p.updateCards = updateCards;
                                                          p.cards = cards; //make sure the cards are added before the props are spread
                                                          return <Edit {...p} /> } 
                                                  }/>
          <Route path='/create' render={() => <Edit cards={cards} updateCards={updateCards} /> }  />
          <Route path='/' render={() => <Listing cards={cards} updateCards={updateCards} /> } />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
