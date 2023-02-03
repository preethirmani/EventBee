import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import  { useNavigate } from 'react-router-dom'


const SearchEvent = () => {
  const [searchinfo, setSearchInfo] = useState({
    search : ''
  })
  const navigate = useNavigate();

  const changeHandler = (event) => {
   
     setSearchInfo ({
    ...searchinfo,
      [event.target.name]: event.target.value
    });
  
  } 

  const clickHandler = (event) => {
    event.preventDefault();
  navigate(`/program/search/${searchinfo.search}`)
  }

  return (
    <>
      <Form className='search-form' >
        <Form.Control  type="text"  onChange={changeHandler}
        className='form-field' id='search' name='search' value={searchinfo.search} 
        />
       
         <Button variant="light" className='search-btn' onClick={clickHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
          </svg>
        </Button>
       
      </Form>
    </>
  )
}

export default SearchEvent