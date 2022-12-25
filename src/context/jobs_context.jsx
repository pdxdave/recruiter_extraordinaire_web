import axios from 'axios';
import React, {useContext, useEffect, useReducer} from 'react';
import reducer from '../reducers/jobs_reducer';
import { jobs_url as url } from '../utils/helper';

import {
    GET_JOBS_BEGIN,
    GET_JOBS_SUCCESS,
    GET_JOBS_ERROR,
    GET_SINGLE_JOB_BEGIN,
    GET_SINGLE_JOB_SUCCESS,
    GET_SINGLE_JOB_ERROR        
} from '../actions'

const initialState = {
    jobs_loading: false,
    jobs_error: false,
    jobs: [],
    single_job_loading: false,
    single_job_error: false,
    single_job: {}
}

const JobsContext = React.createContext()

export const JobsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // GET ALL JOBS
    const fetchJobs = async (url) => {
        dispatch({ type: GET_JOBS_BEGIN})
        try {
            const response = await axios.get(url)
            const jobs = response.data 
    
            dispatch({ type: GET_JOBS_SUCCESS, payload: jobs})
        } catch (error) {
            dispatch({ type: GET_JOBS_ERROR})
        }
    }

    const fetchSingleJob = async (url) => {
        dispatch({ type: GET_SINGLE_JOB_BEGIN})
        try {
            const response = await axios.get(url)
            const singleJob = response.data
            dispatch({ type: GET_SINGLE_JOB_SUCCESS, payload: singleJob})
        } catch (error) {
            dispatch({ type: GET_SINGLE_JOB_ERROR})
        }
    }

    useEffect(() => {
        fetchJobs(url)
    }, [])

    return (
        <JobsContext.Provider value={{
            ...state,
            fetchSingleJob
        }}>
            {children}
        </JobsContext.Provider>
    )
}


export const useJobsContext = () => {
    return useContext(JobsContext)
  }
  