// bring in filter context here
import {useFilterContext} from '../context/filter_context'
// this would send the job info to Job
import styled from 'styled-components'

import Job from './Job'

const JobsList = () => {

  const {filtered_jobs: jobs} = useFilterContext()
  return (
    <Wrapper>

      <Job jobs={jobs}/>
    </Wrapper>
  )
}
const Wrapper = styled.main`
  
 
`

export default JobsList