
import React from 'react';
import Button from 'react-bootstrap/Button';
import {Container, Form} from 'react-bootstrap';
import { useState } from 'react';

const CreateEvent = () => {
const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

    const handleClick = () => {
      console.log('message::'+message);
  };

  return (
    <>
      
      <Form className='col-lg-6 offset-lg-3 form'>  
      <div className='divCreate'>
        <h3>Basic Info</h3>
        <Form.Control  type="text" id='eventName' name='eventName' onChange={handleChange}
        placeholder="Event Title Be clear and Descriptive" />
        <br />
        <Form.Control  type="text" id='organizer' onChange={handleChange}
        placeholder="Organizer " />
      

      <h3>Location</h3>
      <div class="form-group">
        <Form.Control  type="text" placeholder="Address1" id='address1'/>
        <br />
        <Form.Control  type="text" placeholder="Address2 " id='address2' />
        <br />
        <Form.Control  type="text" placeholder="City " id='city' />
        <br />
        <Form.Control  type="text" placeholder="State" id='state'/>
         <br />
        <Form.Control  type="text" placeholder="ZipCode" id='zipcode'/>    
      </div>
      
        <Button variant="secondary btnSubmit" onClick={handleClick} className='btn-submit'
        >Submit</Button>{' '}
      
         
      </div>
      </Form>
      
    </>
  )
}

export default CreateEvent
