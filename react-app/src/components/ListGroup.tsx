import {Fragment} from "react";

function ListGroup() {
    let items = [
        "New York",
        "San Francisco",
        "Tokyo"
    ];

    // items = [];

    const getMessage = () => {
        return items.length === 0 && <p>No item found</p> // if true, render <p> else the boolean is returned, which renders nothing.
    }

    return (
        // using fragment instead of div means only one element in the dom
        <Fragment>
            <h1>List</h1>
            { getMessage() } 
            <ul className="list-group">
            {items.map(item => (
            <li key={item}>{item}</li>
            ))}
            </ul>
        </Fragment>
  );
}

export default ListGroup;