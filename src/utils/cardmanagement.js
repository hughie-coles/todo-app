
import {v4 as uuidv4} from 'uuid';

 const addCard = (cards, newCard) => {
    newCard.id = uuidv4();
    cards.push(newCard);
    return cards
  }

const editCard = (cards, cardId, newCardValues) => {
    const index = cards.findIndex( (el) => el.id === cardId);
    if(index > -1) {
        cards[index] = newCardValues;
    }
    return cards;
}

const removeCard = (cards, cardId) => {
    const newList = cards.filter( card => card.id !== cardId)
    return newList;
}


export{ 
    addCard, 
    editCard,
    removeCard,
}