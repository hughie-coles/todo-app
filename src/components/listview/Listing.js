
import Card from "./Card"
import { useHistory } from "react-router-dom";
import './Listing.css';

function Listing(props){

    const history = useHistory();

    const goToCreate = () => {
        history.push('/create');
    }

    const items = props.cards.map( card => <li key={card.id}><Card updateCards={props.updateCards} cards={props.cards} id={card.id} name={card.name} status={card.status} dueDate={card.dueDate} description={card.description} /></li>)
    return (
        <>
            <ul>
                {items}
            </ul>
            <button onClick={goToCreate} className="button" style={ {margin: "10px 0 40px 50px"} }>Add Task</button>
        </>
        )
}

export default Listing;