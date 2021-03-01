import './Card.css';
import { removeCard} from '../../utils/cardmanagement';
import { useHistory } from "react-router-dom";

function Card(props){

    const history = useHistory();
    const goToPage = (path) => {
        history.push(path);
    }

    const formatDate = (date) => {
        const parsedDate = new Date(date); //just in case it's a string or something

        return (parsedDate.getFullYear()
               + '-' + (parsedDate.getMonth() + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 }) 
               + '-' + parsedDate.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2 })
               + ' ' + parsedDate.getHours().toLocaleString('en-US', { minimumIntegerDigits: 2 }) 
               + ':' + parsedDate.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2 })
        );
    }
    
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <p>Due Date: { formatDate(props.dueDate)}</p>
            <p>Status: {props.status}</p>
            <p>{props.description}</p>
      
            <button onClick={ () => goToPage("/edit/" + props.id)} className="button">Edit</button>
            <button onClick={ () => goToPage("/copy/" + props.id)} className="button">Copy</button>
            <button onClick={ () => { 
                                    const updatedCards = removeCard(props.cards, props.id);
                                    props.updateCards(updatedCards);
                                }
                                }>Delete</button>
        </div>
    )
}

export default Card;