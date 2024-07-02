import {Fragment} from "react";
import { useState } from 'react';

interface Props { // props are immutable, states are mutable
    items: string[];
    heading: string;
    // (item: string) => void
    onSelectItem: (item:string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem}: Props) {

    // hook - function that allows us to tap into built in function in React
    const [selectedIndex, setSelectedIndex] = useState(-1); // useSate returns a var and function, use setSelectedIndex to update selectedIndexs
    // arr[0] // variable (selectedIndex)
    // arr[1] // updater function

    const getMessage = () => {
        return items.length === 0 && <p>No item found</p> // if true, render <p> else the boolean is returned, which renders nothing.
    }

    return (
        // using fragment instead of div means only one element in the dom
        <Fragment>
            <h1>{heading}</h1>
            { getMessage() } 
            <ul className="list-group">
            {items.map((item, index) => (
            <li className={ selectedIndex===index ? "list-group-item active" : "list-group-item "}
            key={item} 
            onClick={() => { 
                setSelectedIndex(index),
                onSelectItem(item)
                }}>{item}
            </li> // not calling handleClick, just listening
            ))}
            </ul>
        </Fragment>
  );
}

export default ListGroup;