import React,{useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Button, Col, Form } from "react-bootstrap";
import CheckOutSteps from '../components/CheckOutSteps';
import FormContainer from '../components/FormContainer';
import {savePaymentMethod} from '../actions/cartActions'

const PaymentScreen = () => {

const navigate = useNavigate();
const dispatch = useDispatch();

const [paymentMethod, setPaymentMethod] = useState('PayPal')

const cart = useSelector(state => state.cart);
const {billingInfo} = cart;

if(!billingInfo) {
  navigate('/billing');
}

const submitHandler= (e) => {
  e.preventDefault();
  console.log('PaymentMethod in PaymentScreen: '+paymentMethod);
  dispatch(savePaymentMethod(paymentMethod))
  navigate('/placeorder');
}

  return (
   <FormContainer> 
    <CheckOutSteps step1 step2 step3 />
    <h1>Payment Method</h1>
    <Form onSubmit={submitHandler}> 
      <Form.Group>
        <Form.Label as = 'legend'>Select Method</Form.Label>
        <Col>
        <Form.Check type='radio'
        label = 'Paypal or Credit Card' id='paypal'
        name='paymentMethod'
        value='paypal' checked
        onChange={e => setPaymentMethod(e.target.value)}></Form.Check>
        </Col>
      </Form.Group>
      <Button type='submit' variant='primary'>Continue</Button>
    </Form>
   </FormContainer>
  )
}

export default PaymentScreen