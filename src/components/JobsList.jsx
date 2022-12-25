// bring in filter context here
import {useFilterContext} from '../context/filter_context'
// this would send the job info to Job

import Job from './Job'

const JobsList = () => {

  const {filtered_jobs: jobs} = useFilterContext()
  return (
    <div>

      <Job jobs={jobs}/>
    </div>
  )
}

export default JobsList