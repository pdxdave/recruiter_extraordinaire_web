import React, {useReducer, useContext, useEffect} from 'react';
import { jobs_url as url} from '../utils/helper';
import axios from 'axios';
import {
    GET_JOBS_BEGIN,
    GET_JOBS_SUCCESS,
    GET_JOBS_ERROR
} from '../actions'

import reducer from '../reducers/jobs_reducer'

const initialState = {
    jobs_loading: false,
    jobs_error: false,
    jobs: []
}

const JobsContext = React.createContext()

export const JobsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // GET ALL JOBS
    const fetchJobs = async (url) => {
        dispatch({ type: GET_JOBS_BEGIN})
        try {
            const response = await axios(url)
            const jobs = response.data
            console.log(jobs)
            dispatch({ type: GET_JOBS_SUCCESS, payload: jobs})
        } catch (error) {
            dispatch({ type: GET_JOBS_ERROR})
        }
    }

    useEffect(() => {
        fetchJobs(url)
    }, [])

    return (
        <JobsContext.Provider value={{
            ...state

        }}>
            {children}
        </JobsContext.Provider>
    )
}

export const useJobsContext = () => {
    return useContext(JobsContext)
}