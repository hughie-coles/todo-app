import Listing from './listview/Listing';

const sortCardsByDateAsc = (cards) => {
    return cards.sort( (a,b) => new Date(a.dueDate) - new Date(b.dueDate));
}

const dueInLessThanAWeek = (cards) => {
    return cards.filter(card => {
        const today = new Date();
        const parsedDueDate = new Date(card.dueDate);
        const weekMinusSevenDays = new Date(parsedDueDate).setDate(parsedDueDate.getDate() - 7);
        console.log(parsedDueDate);
        console.log(weekMinusSevenDays);
        return ( (parsedDueDate - today) >= 0) && ( today - weekMinusSevenDays >= 0) && card.status !== "completed";
    });
}

const overdueItems = (cards) => {
    return cards.filter(card => card.status !== "completed" && ((new Date(card.dueDate) - new Date()) <  0 ));
}

const Dashboard = (props) => {
    return (
    <div style={ { display: "flex", flexDirection: "row" } }>
        <Listing listTitle={"Todo List"} cards={ sortCardsByDateAsc(props.cards) } updateCards={props.updateCardsWithStorage} />
        <Listing  listTitle={"Due Soon"} cards={ dueInLessThanAWeek(props.cards) } updateCards={props.updateCardsWithStorage} hideButton={true} />
        <Listing  listTitle={"Overdue"} cards={ overdueItems(props.cards) } updateCards={props.updateCardsWithStorage} hideButton={true} />
    </div>
    )
}

export default Dashboard;