

import React, { useState } from 'react'
import SelectBox from 'devextreme-react/select-box';
import TextBox from 'devextreme-react/text-box';

import './Registration.css'

export default function Registration() {
    const [name, setName] = useState(null);
    const [place, setPlace] = useState(null);
    const [mail, setMail] = useState(null);
const handleSubmit=(e)=>
{
    e.preventDefault();
console.log(name);
}
    const [country, setCountry] = useState("Select");
    const countries = ["India", "USA", "Canada"];  

    const onNamechanged = (e) => {
        setName(e.value);
      }

      const onCountrychanged = (e) => {
        setCountry(e.value);
      }

      const onStatechanged = (e) => {
        setPlace(e.value);
      }
      const onMailchanged = (e) => {
        setMail(e.value);
      }
return (
  <div>
    <form onSubmit={handleSubmit}>

    <div className="options">
      <div className="caption">Registration</div>
      <div className="option">
        <span>Name:</span>
        <TextBox value={name} onValueChanged={onNamechanged}
        />
      </div>

      <div className="option">
        <span>State:</span>
        <TextBox value={place} onValueChanged={onStatechanged}
         />
      </div>

      <div className="option">
        <span>Country:</span>
        <SelectBox
          items={countries}
          value={country}
          onValueChanged={onCountrychanged}
        />
      </div>

      <div className="option">
        <span>E-mail:</span>
        <TextBox value={mail} onValueChanged={onMailchanged}
         />
      </div>

    </div>
    <input type="Submit"/>
    </form>
  
  </div>
);
}
