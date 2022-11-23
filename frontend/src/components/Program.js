import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Program = ({prog}) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Link to = {`/program/${prog._id}`}>
          <Card.Img src={prog.image} variant='top'></Card.Img>
        </Link>
     
      <Card.Body>
        <Card.Title as = 'h4'> 
          <strong>{prog.name}</strong>
        </Card.Title>
        <Card.Text as = 'div' className='text-primary'>
          <strong>{prog.date} {prog.time}</strong>
        </Card.Text>
        <Card.Text as = 'div' className='text-muted'>{prog.price}</Card.Text>
        <Card.Text as = 'div'>
          <strong>{prog.host}</strong>
          </Card.Text>
      </Card.Body>
       </Card>
    </>
  )
}

export default Program