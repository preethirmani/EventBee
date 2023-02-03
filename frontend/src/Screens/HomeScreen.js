import React, {useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import Program from '../components/Program';
import {listPrograms} from '../actions/programActions';
import Loader from '../components/Loader';
import Message from '../components/Message';





const HomeScreen = () => {
  const dispatch = useDispatch();
  const programList = useSelector((state) => state.programList);
  const {loading, programs, error} = programList;

  useEffect(() => {

    dispatch (listPrograms());
 
  },[dispatch])

  return (
    <>
    {
      loading ? (
        <Loader />
      )
      : error ? (
        <Message variant = 'danger'>{error}</Message>
      ) 
      : (
         <Row>
        {
          programs.map(program => (
            <Col key={program._id} sm={12} md={6} lg={4} xl={3}>
              <Program prog = {program} />
            </Col>
          ))
        }
        </Row>
      )
    } 
   
    </>
  )
}

export default HomeScreen