import React from 'react'
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './Screens/HomeScreen';
import ProgramDetail from './Screens/ProgramDetail';

function App() {
  return (
   <>
    <Router>
      <Header />
      <main>
        <Container className='border-primary'>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/program/:id' element={<ProgramDetail/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
   </>
  );
}

export default App;
