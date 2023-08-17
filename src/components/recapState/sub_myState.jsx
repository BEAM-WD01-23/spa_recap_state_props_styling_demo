import * as React from 'react';
 
const sub_myState = ({hi, items, setItems}) => {
    //const propsOne = props.hi;

    return (
        <div>
            <h2>II. sub_myState component</h2>
            {/* <h3>{propsOne}</h3> */}
            <h3>{hi}</h3>
            <h3>{items.map((item, a)=>(
                <div key={a} className='myItems'>
                    <p>{item}</p>
                </div>
            ))}
            </h3>
        </div>
    );
};

export default sub_myState;