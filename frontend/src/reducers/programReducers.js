import { PROGRAM_LIST_REQUEST, 
         PROGRAM_LIST_SUCCESS,
         PROGRAM_DETAIL_FAIL, 
         PROGRAM_LIST_FAIL,
         PROGRAM_DETAIL_SUCCESS, 
         PROGRAM_DETAIL_REQUEST, 
         PROGRAM_SEARCH_REQUEST, 
         PROGRAM_SEARCH_SUCCESS, 
         PROGRAM_SEARCH_FAIL } from "../constants/programConstants";  


export const programListReducer = (state = {programs : []}, action) => {
  switch (action.type) {
     case PROGRAM_LIST_REQUEST : 
      return {loading : true, programs : []};

    case PROGRAM_LIST_SUCCESS:   
        return {loading : false , programs : action.payload};

    case PROGRAM_LIST_FAIL:
        return {loading : false , error : action.payload};

    default :
      return state;
  }
}

export const programDetailReducer = (state = {progrm : {}}, action)=> {
  switch (action.type) {
    case PROGRAM_DETAIL_REQUEST:
     
      return {loading : true, progrm : {}};

    case PROGRAM_DETAIL_SUCCESS:
   
      return {loading : false, progrm : action.payload}

    case PROGRAM_DETAIL_FAIL:
      return {loading : false,  error : action.payload}

    default:
      return state;
  }

}

export const programSearchDetailReducer = (state = {progrm : {}}, action) => {

  switch (action.type) {
    case PROGRAM_SEARCH_REQUEST :
      return {loading : true, progrm : {} };

    case PROGRAM_SEARCH_SUCCESS:
      return {loading : false, progrm : action.payload};

    case PROGRAM_SEARCH_FAIL :
      return {loading : false, error : action.payload};

    default:
      return state;
  }

}