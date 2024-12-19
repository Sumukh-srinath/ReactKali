import './App.css';
import { useState } from 'react';
import Challenge5 from './challenges/Challenge5';
import Challenge6 from './useEffect/Challenge6';
import Challenge7 from './useEffect/Challenge7';
import Challenge8 from './useEffect/Challenge8';

function App() {

  const [show, setShow] = useState(false);

  const [counter, setCounter] = useState(0);


  const UpdateToggle = () => {
    setShow(show => !show);
  };




  const IncrementCounter = () => {
    if (counter !== 10) {
      setCounter(counter => counter + 1)

    }
    else {
      alert("You have updated to max")
    }

  }

  function Counter() {
    const [first, setFirst] = useState(0);
    const UpdateCounter = () => {
      setFirst(first => first + 1);
    };

    const SubtractCounter = () => {
      setFirst(first => first - 1);
    };
    return (
      <div>
        <h4>
          1. Challenge: Create a counter using useState. Initially, the counter should be 0.
          Clicking the "+" button should increase the counter by 1, and clicking the "-" button should decrease the counter by 1.
        </h4>
        <button onClick={SubtractCounter} style={{ margin: '10px' }}>-</button>
        {first}
        <button onClick={UpdateCounter} style={{ margin: '10px' }}>+</button>
      </div>
    );
  }

  function Challenge2() {
    return (
      <div>
        <h4>
          2. Challenge: Toggle Visibility
          Create a button that toggles the visibility of a paragraph of text. Initially, the paragraph should be visible. When the button is clicked, the paragraph should hide, and clicking the button again should make it visible.
        </h4>
        {show && <p>This is Toggle inside paragraph</p>}
        <button onClick={UpdateToggle}>Show or Hide</button>
      </div>
    );
  }

  function Challenge3() {
    const [inputVal, setInputVal] = useState("");
    return (
      <div>
        <h4>3. Challenge: Input Field with Live Preview
          Create an input field where the user can type text, and the text should be displayed live in a paragraph below the input field. As the user types, the paragraph should update immediately with the new text.</h4>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <p>Preview: {inputVal}</p>
      </div>
    );
  }


  function Challenge4() {
    return (
      <div>
        <h4>
          4. Challenge: Button Click Counter
          Create a button that, when clicked, increments a counter. However, you need to track how many times the button has been clicked in total and display the total number of clicks below the button.

          Requirements:

          Initialize the counter state to 0.
          When the button is clicked, increase the count by 1.
          Display the total count of button clicks below the button.
          Bonus: If the counter reaches 10, change the button text to "Max Clicks Reached".
        </h4>


        <p>Counter Value: {counter} <button onClick={IncrementCounter} disabled={counter === 10}>Increment</button></p>
      </div>
    );
  }

  // function Challenge5() {

  // }

  return (
    <div>
      <h1>UseEffect Challenges</h1>
      <Challenge8 />
      <Challenge7 />
      <Challenge6 />
      <h1>React useState Practice problems</h1>
      <Counter />
      <Challenge2 />
      <Challenge3 />
      <Challenge4 />
      <Challenge5 />
    </div>
  );
}

export default App;