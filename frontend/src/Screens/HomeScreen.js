import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Program from '../components/Program';
import programs from '../programs';




const HomeScreen = () => {
  return (
    <>
   
     <Row>
        {
          programs.map(program => (
            <Col key={program._id} sm={12} md={6} lg={4} xl={3}>
              <Program prog = {program} />
            </Col>
          ))
        }
     </Row>
    </>
  )
}

export default HomeScreen