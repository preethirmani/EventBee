
import React from 'react';
import Button from 'react-bootstrap/Button';
import {Form} from 'react-bootstrap';

const CreateEvent = () => {
  return (
    <>CreateEvent
      
      <Form>  
        <h2>Basic Info</h2>
        <Form.Control  type="text" placeholder="Event Title Be clear and Descriptive" />
        <br />
        <Form.Control  type="text" placeholder="Organizer " />
      </Form>

      <h2>Location</h2>

      
    </>
  )
}

export default CreateEvent
