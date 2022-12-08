import * as React from 'react';
import { useState } from 'react';

function FormPackage() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    createNewPackage();
  }

  const createNewPackage = async () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs)
      };
      const response = await fetch('http://localhost:3001/api/packages', requestOptions)
      const data = await response.json();
      //setPackages(data.data)
    }
    catch (e) {
      console.log('e')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Package description:
        <input
          type='text'
          name='description'
          value={inputs.description || ''}
          onChange={handleChange}
        />
      </label>
      <label>Package owner:
        <input
          type='text'
          name='owner'
          value={inputs.owner || ''}
          onChange={handleChange}
        />
      </label>
      <label>Package location:
        <input
          type='text'
          name='storageLocation'
          value={inputs.storageLocation || ''}
          onChange={handleChange}
        />
      </label>
      <label>Package status:
        <select value={inputs.status} name='status' onChange={handleChange}>
          <option value='waiting'>Waiting</option>
          <option value='delivering'>Delivering</option>
        </select>
      </label>
      <input type='submit' />
    </form>
  )
}


export default FormPackage;