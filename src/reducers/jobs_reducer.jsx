import {
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  GET_SINGLE_JOB_BEGIN,
  GET_SINGLE_JOB_SUCCESS,
  GET_SINGLE_JOB_ERROR        
} from '../actions'

const jobs_reducer = (state, action) => {
  
  // GET ALL JOBS
  if(action.type === GET_JOBS_BEGIN){
    return {
      ...state,
      jobs_loading: true
    }
  }
  if(action.type === GET_JOBS_SUCCESS){
    return {
      ...state,
      jobs_loading: false,
      jobs: action.payload
    }
  }
  if(action.type === GET_JOBS_ERROR){
    return {
      ...state,
      jobs_error: true,
      jobs_loading: false,
    }
  }

  // GET SINGLE JOB
  if(action.type === GET_SINGLE_JOB_BEGIN){
    return {
      ...state,
      single_job_loading: true,
      single_job_error: false,
    }
  }
  if(action.type === GET_SINGLE_JOB_SUCCESS){
    return {
      ...state,
      single_job_loading: false,
      single_job: action.payload
    }
  }
  if(action.type === GET_SINGLE_JOB_ERROR){
    return {
      ...state,
      single_job_loading: false,
      single_job_error: true
    }
  }




  throw new Error(`No Matching "${action.type}" - action type`)
}

export default jobs_reducer