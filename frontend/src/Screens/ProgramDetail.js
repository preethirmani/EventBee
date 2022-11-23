import React from 'react';
import {useParams} from 'react-router-dom';
import progrmas from '../programs';

const ProgramDetail = () => {
  const params = useParams();
  const progrm = progrmas.find(p => p._id === params.id);
  console.log('params.id'+params.id);
  console.log(`Program:: ${JSON.stringify(progrm)}`);
  return (
    <div>ProgramDetail</div>
  )
}

export default ProgramDetail