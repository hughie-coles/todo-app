

const Reminders = (props) => {

    const sorted = props.cards.sort((a,b) => new Date(a.dueDate) - new Date(b.dueDate));
    const formatDate = (date) => {
        const parsedDate = new Date(date);
         return (parsedDate.getFullYear() + '-' + (parsedDate.getMonth() + 1) + '-' + parsedDate.getDate()
         + ' ' + parsedDate.getHours().toLocaleString('en-US',{ minimumIntegerDigits: 2}) + ':' + parsedDate.getMinutes().toLocaleString('en-US',{ minimumIntegerDigits: 2}));
    }
    return (
        <ul>
            {sorted.map( (card) => (
                <li key={card.id}>
                    <h3>{card.name}</h3>
                    <p>{formatDate(card.dueDate)}</p>
                </li>
                ))}
        </ul>
    )
}

export default Reminders;