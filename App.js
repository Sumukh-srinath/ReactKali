import './App.css';
import { useState } from 'react';

function App() {
  const [first, setFirst] = useState(0);
  const [show, setShow] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [counter, setCounter] = useState(0);
  const form = {
    name: '',
    email: '',
    number: ''
  }

  const updateFormDetails=(field,val)=>{
    setFormData({...formData,
    [field]:val.target.value})
  }

  const [formData, setFormData] = useState(form);

  const UpdateToggle = () => {
    setShow(show => !show);
  };

  const UpdateCounter = () => {
    setFirst(first => first + 1);
  };

  const SubtractCounter = () => {
    setFirst(first => first - 1);
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

  function Challenge5() {
    return (
      <div>
        <h4>5. Challenge: Form with Multiple Inputs and Validation
          Objective: Create a form with the following fields:

          Name (Text Input)
          Email (Text Input)
          Age (Number Input)
          Requirements:

          Implement form validation:
          Name should be required and have a minimum length of 3 characters.
          Email should be in a valid email format.
          Age should be a number and greater than or equal to 18.
          Display error messages next to the respective input fields if the validation fails.
          If the form is valid, display a success message below the form with the entered data.
          Bonus:

          Add a submit button that only becomes enabled when the form is valid.
          Reset the form after successful submission.
        </h4>
        <p>Name <input style={{ marginLeft: '60px' }} value={formData.name} onChange={(e) => {
          setFormData({ ...formData, name: e.target.value })
        }}></input></p>
        <p>Email <input style={{ marginLeft: '60px' }} value={formData.email}></input></p>
        <p>Age <input style={{ marginLeft: '60px' }} value={formData.number}></input></p>

        {formData.name}
      </div>
    );
  }

  return (
    <div>
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
