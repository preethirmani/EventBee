import React from 'react'
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ProfileScreen from './Screens/ProfileScreen';
import ProgramDetail from './Screens/ProgramDetail';
import CreateEvent from './Screens/CreateEvent';
import SearchScreen from './Screens/SearchScreen';
import CartScreen from './Screens/CartScreen';
import BillingScreen from './Screens/BillingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';

function App() {
  return (
   <>
    <Router>
      <Header />
      <main>
        <Container className='border-primary'>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/program/:id' element={<ProgramDetail/>} />
            <Route path='/program/create/' element={<CreateEvent/>} />
            <Route path='/program/search/:name' element={<SearchScreen/>} />
            <Route path='/program/cart/' element={<CartScreen/>} />
            <Route path='/program/cart/:id' element = {<CartScreen/>} />
            <Route path='/billing/' element={<BillingScreen/>} />
            <Route path='/payment/' element={<PaymentScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/order/:id' element={<OrderScreen />} /> 
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
   </>
  );
}

export default App;
