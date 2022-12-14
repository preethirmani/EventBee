
import React from 'react';
import Button from 'react-bootstrap/Button';
import {Form} from 'react-bootstrap';
import { useState } from 'react';

const CreateEvent = () => {
const [contact, setContact] = useState({
  eventName : '',
  organizer : '',
  address1 : '',
  address2 : '',
  city : '',
  state : '',
  zipcode : '',
  email : '',
  zoom : ''
});
  
const [isShown, setIsShown] = useState(false);

const submitHandler = (event) => {

  event.preventDefault();
  console.log(contact)
}

const changeHandler = (event) => {
  setContact({ 
    ...contact, 
    [event.target.name]: event.target.value
   });
}

const venueHandler = (event) => {
  console.log('Venue Clicked');
  setIsShown(true);
}

const onlineHandler = (event) => {
  setIsShown(false);
}

  return (
    <>
      
      <Form className='col-lg-6 offset-lg-3 form'>  
      <div className='div-create'>
        <h4 className='h4-create-event'><strong>Basic Info</strong></h4>
        <Form.Control  type="text" 
        name='eventName' value={contact.eventName} onChange={changeHandler}
        placeholder="Event Title Be clear and Descriptive" />
        <br />
        <Form.Control  type="text" id='organizer'  onChange={changeHandler}
        name='organizer' value={contact.organizer}
        placeholder="Organizer " />
      

      <h4 className='h4-create-event h4-location' onClick={onlineHandler}><strong>Location</strong></h4>
      <div className='div-location'>
         <Button variant="outline-dark" onClick={venueHandler}>Venue</Button>{' '}
          <Button variant="outline-dark" onClick={onlineHandler}>Online</Button>{' '}
      </div>
      { isShown && (
      <div class="form-group">
        <Form.Control  type="text" placeholder="Address1" onChange={changeHandler}
        id='address1' name='address1' value={contact.address1}/>
        <br />
        <Form.Control  type="text" placeholder="Address2 " onChange={changeHandler}
        id='address2'  name='address2' value={contact.address2}/>
        <br />
        <Form.Control  type="text" placeholder="City" onChange={changeHandler}
        id='city' name='city' value={contact.city}
        />
        <br />
        <Form.Control  type="text" placeholder="State" onChange={changeHandler}
        id='state' name='state' value={contact.state}/>
         <br />
        <Form.Control  type="text" placeholder="ZipCode" onChange={changeHandler}
        id='zipcode' name='zipcode' value={contact.zipcode}/>    
      </div>
   ) }
    {!isShown && (

        <div class="form-group">
        <Form.Control  type="email" placeholder="Enter email" onChange={changeHandler}
        id='email' name='email' value={contact.address1}/>
        <br />
        <Form.Control  type="text" placeholder="zoom " onChange={changeHandler}
        id='zoom'  name='zoom' value={contact.address2}/>
        <br />
        </div>
    )} 
      
        <Button variant="secondary btnSubmit" onClick={submitHandler} className='btn-submit'
        >Submit</Button>
      
         
      </div>
      </Form>
      
    </>
  )
}

export default CreateEvent
