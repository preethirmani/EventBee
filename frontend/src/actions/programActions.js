import axios from "axios";
import { PROGRAM_LIST_REQUEST, PROGRAM_LIST_SUCCESS,
         PROGRAM_DETAIL_FAIL, PROGRAM_LIST_FAIL,
         PROGRAM_DETAIL_SUCCESS, PROGRAM_DETAIL_REQUEST, PROGRAM_SEARCH_REQUEST, PROGRAM_SEARCH_SUCCESS, PROGRAM_SEARCH_FAIL } from "../constants/programConstants";  

export const listPrograms = () => async (dispatch) => {

  try {
    dispatch({type : PROGRAM_LIST_REQUEST});
    const {data} = await axios.get('/api/programs/');
    dispatch ({
      type : PROGRAM_LIST_SUCCESS,
      payload : data
    })

  } catch (error) {
    dispatch({
      type : PROGRAM_LIST_FAIL,
      payload : 
        error.response && error.response.data.message 
        ? error.response.data.message
        : error.message
    })

  }
}

export const listProgramDetail = (id) => async (dispatch) => {
  try {
    dispatch ({
      type: PROGRAM_DETAIL_REQUEST
    });
    const {data} = await axios.get(`/api/programs/${id}`)
    dispatch({
      type : PROGRAM_DETAIL_SUCCESS,
      payload : data
    })

  } catch (error) {
    dispatch({
      type : PROGRAM_DETAIL_FAIL,
      payload : error.response && error.response.data.message 
      ? error.response.data.message
      : error.message
    })
  }
}

export const searchProgramDetail = (name) => async (dispatch) => {

  try {
    dispatch({
      type : PROGRAM_SEARCH_REQUEST
    });
  
    const {data} = await axios.get(`/api/programs/search/${name}`);

    dispatch({
      type : PROGRAM_SEARCH_SUCCESS,
      payload : data
    });


  } catch(error) {
    dispatch({
      
      type : PROGRAM_SEARCH_FAIL,
      payload : error.response && error.response.data.message
                ? error.response.data.message
                :error.message
          });


  }

}
