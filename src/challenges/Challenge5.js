import { useState } from "react";

const form = {
    name: '',
    email: '',
    age: null
}
export default function Challenge5() {
    function validEmail(s) {
        let x = /\S+@\S+\.\S+/
        return x.test(s)
    }


    const updateFormDetails = (field, val) => {
        setFormData(prev => ({
            ...prev,
            [field]: val
        }))
    }

    const [formData, setFormData] = useState(form);
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
            <p>Name <input style={{ marginLeft: '60px' }} value={formData.name}
                onChange={(e) => updateFormDetails('name', e.target.value)}
            /></p>
            {formData.name.length < 3 && <span style={{ color: 'red' }}>Name less than designated set</span>}


            <p>Email <input style={{ marginLeft: '60px' }} value={formData.email}
                onChange={(e) => updateFormDetails('email', e.target.value)}
            /></p>
            {!validEmail(formData.email) && <span style={{ color: 'red' }}>invalid email</span>}


            <p>Age <input style={{ marginLeft: '60px' }} value={formData.age}
                onChange={(e) => updateFormDetails('age', Number(e.target.value))}
            /></p>
            {formData.age < 18 && <span style={{ color: 'red' }}>Age is less than 18</span>}
        </div>
    );
}