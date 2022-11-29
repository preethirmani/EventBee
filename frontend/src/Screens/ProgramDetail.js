import React from 'react';
import {useParams} from 'react-router-dom';
import {Container, Row, Col, Image, Card} from 'react-bootstrap'
import progrmas from '../programs';


const ProgramDetail = () => {
  const params = useParams();
  const progrm = progrmas.find(p => 
   
    String(p._id) === params.id
  );
  console.log(progrm.name);
 
  return (
    <>
   
     
        <Container className='image-container'>
          <div className='image-background'>
            <div className='col-9'>
             <Image src={progrm.image} alt='Event' fluid />
            </div>
          </div>
         
        
        
          <Row className='row1'>
            <Col className='col1 col-9'>
              <h3 className='h3-title'><strong>{progrm.name}</strong></h3>
            </Col>
          </Row>


          <Row className='row2'>
            <Col className='col-9'>
              <h6 className='p-description'>{progrm.description}</h6>
            </Col>
          </Row>

          <Row>
            <Col className='col-3'>
              <div className='div-host'>
                <span>By</span>
                <span className='span-host'>{progrm.host}</span>
              </div>
            </Col>
            <Col className='col-3'>
              <p className='p-rating'>{progrm.rating}   {progrm.numReviews} reviews</p>
            </Col>
          </Row>


          <Row>
            <Col>
              <h4 className='h4-sub'><strong>When and Where</strong></h4>
            </Col>
          </Row>

          <Row>
            <Col className='col-4'>
              <div className='div-date'>
                <p>
                <i class="fas fa-regular fa-calendar"></i>
                 <span className='span-dateHeading'> <strong>Date and Time</strong></span>
                </p>
                <div><span className='span-date'>{progrm.date}</span>
                   <span className='span-time'>{progrm.time}</span></div>
              </div>
            </Col>
            <Col className='row3-col1 col-5'>
              <div className='div-location'>
                <h6><strong>Location</strong></h6>

              </div>
            </Col>
          </Row>
    
    </Container>
        
    </>

  
  )
}

export default ProgramDetail