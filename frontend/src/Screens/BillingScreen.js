import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import CheckOutSteps from '../components/CheckOutSteps';
import FormContainer from "../components/FormContainer";
import {saveBillingInfo} from '../actions/cartActions';



const BillingScreen = () => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  const {billingInfo} = cart;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveBillingInfo({name, address, city, state,zipCode, country}))

    navigate('/payment');
  }
  return(
   <FormContainer>

      <CheckOutSteps step1 step2 />
     
      <h1>Billing Information</h1>


      <Form onSubmit={submitHandler} >

          <Form.Group controlId='name'>
            <Form.Label>Full Name</Form.Label>

            <Form.Control type='text'
            placeholder='Enter Full Name' 
            value = {name}
            onChange={e => setName(e.target.value) }>  
            </Form.Control>
          </Form.Group>

           <Form.Group controlId = 'address'>
            <Form.Label>Address</Form.Label>
            <Form.Control type='text'
            placeholder='Enter address' 
            value = {address}
            onChange={e => setAddress(e.target.value) }>  
            </Form.Control>
          </Form.Group>

           <Form.Group controlId = 'city'>
            <Form.Label>City</Form.Label>
            <Form.Control type='text'
            placeholder='Enter city' 
            value = {city}
            onChange={e => setCity(e.target.value) }>  
            </Form.Control>
          </Form.Group>

          <Form.Group controlId = 'state'>
            <Form.Label>State</Form.Label>
            <Form.Control type='text'
            placeholder='Enter state' 
            value = {state}
            onChange={e => setState(e.target.value) }>  
            </Form.Control>
          </Form.Group>

          <Form.Group controlId = 'zipCode'>
            <Form.Label>ZipCode</Form.Label>
            <Form.Control type='text'
            placeholder='Enter zipcode' 
            value = {zipCode}
            onChange={e => setZipCode(e.target.value) }>  
            </Form.Control>
          </Form.Group>

          <Form.Group controlId = 'country'>
            <Form.Label>Country</Form.Label>
            <Form.Control type='text'
            placeholder='Enter Country' 
            value = {country}
            onChange={e => setCountry(e.target.value) }>  
            </Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Continue
          </Button>
      </Form>
   </FormContainer>
  )

}

export default BillingScreen;