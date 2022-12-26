import React , {useEffect, useContext, useReducer} from 'react';
import reducer from '../reducers/filter_reducer';
import {
    LOAD_JOBS,
    UPDATE_FILTERS,
    FILTER_JOBS,
    CLEAR_FILTERS
} from '../actions'

import { useJobsContext } from './jobs_context';

const initialState = {
    filtered_jobs: [],
    all_jobs: [],
    filters: {
        text: '',
        city: 'all-locations'
    }
}

const FilterContext = React.createContext()

export const FilterProvider = ({children}) => {
    const {jobs} = useJobsContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({ type: LOAD_JOBS, payload: jobs})
    }, [jobs])

    useEffect(() => {
        dispatch({ type: FILTER_JOBS})
    }, [jobs, state.filters])


    const updateFilters = (e) => {
        let name = e.target.name 
        let value = e.target.value 
        
        dispatch({ type: UPDATE_FILTERS, payload: {name, value}})
    }
    const clearFilters = () => {
        dispatch({ type: CLEAR_FILTERS})
    }


    return (
        <FilterContext.Provider value={{
            ...state,
            updateFilters,
            clearFilters

        }}>
            {children}
        </FilterContext.Provider>
    )
}
export const useFilterContext = () => {
    return useContext(FilterContext)
  }