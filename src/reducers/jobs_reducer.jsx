import {
    GET_JOBS_BEGIN,
    GET_JOBS_SUCCESS,
    GET_JOBS_ERROR
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
            jobs_loading: false,
            jobs: action.payload
        }
    }
    if(action.type === GET_JOBS_ERROR){
        return {
            ...state,
            jobs_loading: false,
            jobs_error: true
        }
    }
    throw new Error(`No Matching "${action.type}" - action-type`)
}

export default jobs_reducer