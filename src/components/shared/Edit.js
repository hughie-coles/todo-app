import './Edit.css';
import {v4 as uuidv4} from 'uuid'
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { addCard, editCard} from '../../utils/cardmanagement';

const Edit = (props) => {

    const history = useHistory();

    let cardToEdit = {}
    if (props && props.match && props.match.params && props.match.params.id) {
        var cardId = props.match.params.id;
        cardToEdit = props.cards.find( (c) => c.id === cardId) || {};
    }

    const [name, setName] = useState(cardToEdit.name || "");
    const [description, setDescription] = useState(cardToEdit.description || "");
    const [status, setStatus] = useState(cardToEdit.status || "");
    const [dueDate, setDueDate] = useState(cardToEdit.dueDate || "");

    const returnToListing = () => {
        history.push('/');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let card = {
                    name: name, 
                    description: description, 
                    status: status, 
                    id: cardId, 
                    dueDate: dueDate
                }

        if (cardId) {
            const updatedCards = editCard(props.cards, cardId, card);
            props.updateCards(updatedCards);
        }
        else {
            //New card needs a new id
            card.id = uuidv4();
            const updatedCards = addCard(props.cards, card);
            props.updateCards(updatedCards);
        }
        returnToListing();  
    }   

    return (
        <><button onClick={returnToListing} className="button">Return to list</button>
            <form onSubmit={handleSubmit}>
                <section className="form">
                    <div className="formControl">
                        <label htmlFor="cardName">Name:</label>
                        <input name="cardName" type="text" onChange={ e => setName(e.target.value)} value={name} />
                    </div>
                    <div className="formControl">
                        <label htmlFor="cardDescription">Description:</label>
                        <textarea name="cardDescription" onChange={ e => setDescription(e.target.value)} value={description} ></textarea>
                    </div>
                    <div className="formControl">
                        <label htmlFor="cardStatus">Status:</label>
                        <select name="cardStatus" onChange={ e => setStatus(e.target.value)} value={status}>
                            <option value=''>Select One</option>
                            <option value="ready">Ready</option>
                            <option value="inprogress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div className="formControl">
                        <label htmlFor="cardDueDate">Due Date:</label>
                        <input name="cardDueDate" type="text" onChange={ e => setDueDate(e.target.value)} value={dueDate} />
                    </div>
                    <div className="formControl">
                        <input type="submit" value="Add Task" />
                    </div>
                </section>
            </form>
        </>
    )
}

export default Edit;
