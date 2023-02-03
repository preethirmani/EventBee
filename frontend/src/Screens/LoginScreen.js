import React,{useState, useEffect} from 'react';
import {useNavigate, useLocation, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Form, Row, Col, Button} from 'react-bootstrap';
import {login} from '../actions/userActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const userLogin = useSelector(state => state.userLogin);
  const {loading, error, userInfo} = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(()=> {
    if(userInfo) {
      navigate(redirect)
    }
  },[userInfo, navigate, redirect])

  const submitHandler= (e) => {
    e.preventDefault();
    dispatch(login(email, password))
  }

  return (
   <FormContainer> 
    <h1>Sign In</h1>
   { loading && <Loader /> }
   { error && <Message variant='danger'>{error}</Message> }
    <Form onSubmit={submitHandler}>
      <Form.Group controlId = 'email'>
        <Form.Label>Uername</Form.Label>
         <Form.Control type="email" placeholder="Enter email"
         value={email} onChange={e => setEmail(e.target.value)} />

      </Form.Group>

      <Form.Group controlId='password'>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value={password} onChange={e => setPassword(e.target.value)}/>

      </Form.Group>

      <Button type='submit' variant='primary'>
          Log In
      </Button>
    </Form>
    <Row className='py-3'>
      <Col>
      New Customer ? {' '}
      <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
      
      </Col>

    </Row >

   </FormContainer>
  )
}

export default LoginScreen