import React from 'react';
import {useParams} from 'react-router-dom';
import {Card} from 'react-bootstrap'
import progrmas from '../programs';
import programs from '../programs';

const ProgramDetail = () => {
  const params = useParams();
  const progrm = progrmas.find(p => 
   
    p._id == params.id
  );
  console.log(progrm.name);
 
  return (
    <>
    <Card >
      <Card.Img src={progrm.image} variant='top'></Card.Img>
    </Card>
    </>

  
  )
}

export default ProgramDetail