import * as React from 'react';
import './myState.css';
import { useState } from 'react';
import SubMyState from './sub_myState';
 
const myState = () => {
     const [items, setItems] = useState([
        'item one', 'item two', 'item three', 'item four', 'item five'
     ]);

    return (
        <div>
            <h2>I. This is myState component</h2>
            {/* {items.map((item, i)=>(
                <div key={i} className='myItems'>
                    <p>{item}</p>
                </div>
            ))} export this functionality to the sub_myState component */}
            {/*  */}
            <SubMyState hi='what ever I export' items={items} setItems={setItems}/>
            
        </div>
        
    );
};

export default myState;