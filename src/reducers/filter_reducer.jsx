import {
    LOAD_JOBS,
    UPDATE_FILTERS,
    FILTER_JOBS,
    CLEAR_FILTERS
} from '../actions'

const filter_reducer = (state, action) => {
    if(action.type === LOAD_JOBS){
        return {
            ...state, 
            all_jobs:[...action.payload], 
            filtered_jobs:[...action.payload],
            filters: {...state.filters}
        }
    }

    if(action.type === UPDATE_FILTERS){
        const {name, value} = action.payload
        return {...state, filters:{...state.filters, [name]: value}}
    }

    if(action.type === FILTER_JOBS){
        const {all_jobs} = state
        const {text, city} = state.filters
        //making a copy of all the jobs before filtering
        let tempJobs = [...all_jobs]

        if(text){
            tempJobs = tempJobs.filter((job) => {
                return job.title.toLowerCase().startsWith(text)
            })
        }

        if(city !== 'all-locations'){
            tempJobs = tempJobs.filter((c) => c.city === city)
        }

        return {...state, filtered_jobs: tempJobs}
    }



    if(action.type === CLEAR_FILTERS){
        return {
            ...state,
                filters: {
                    ...state.filters,
                    text: '',
                    city: 'all-locations'
                }
        }
    }

    throw new Error (`No Matching "${action.type}" - action type`)
}

export default filter_reducer;