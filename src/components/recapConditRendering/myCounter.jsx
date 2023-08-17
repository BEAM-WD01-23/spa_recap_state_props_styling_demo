import * as React from 'react';
import './myCounter.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CarImage from '../../assets/images/cars.jpg';

 
const myCounter = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () =>{
        //console.log('increment clicked');
        setCounter(counter + 1);
    }
    //
    const handleDecrement = () =>{
        setCounter(counter - 1);
    }
    //
    function conditionalRendering(){
        return counter === 0 ? 'START' : counter;
    }
    //combine styling with conditional-rendering as below ...
    function renderWithBackgroundColorChange(){
        const styleOne = 'positiveNumber';
        const styleTwo = 'zeroAndNegativeNumber';
        return counter <= 0 ? styleTwo : styleOne;
    }

    return (
        <div className='conditionalRendering'>
            <h2>III. myCounter component</h2>
            {/* <span>Show Number: <p>{counter}</p></span> */}
            {/* conditional rendering as below ... */}
            <p className={renderWithBackgroundColorChange()}>{conditionalRendering()}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            {/* bootstrap component */}
    <p>Adding bootstrap component inside other components ...</p>
            {/*  */}
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top"  src={CarImage} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </div>
    );
};

export default myCounter;

 

 