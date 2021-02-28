import './Card.css';
import { removeCard} from '../../utils/cardmanagement';
import { useHistory } from "react-router-dom";

function Card(props){

    const history = useHistory();
    const goToPage = (path) => {
        history.push(path);
    }
    
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <p>Due Date: {props.dueDate}</p>
            <p>Status: {props.status}</p>
            <p>{props.description}</p>
            <button onClick={ () => goToPage("/edit/" + props.id)} className="button">Edit</button>
            <button onClick={ () => { 
                                    const updatedCards = removeCard(props.cards, props.id);
                                    props.updateCards(updatedCards);
                                }
                                }>Delete</button>
        </div>
    )
}

export default Card;