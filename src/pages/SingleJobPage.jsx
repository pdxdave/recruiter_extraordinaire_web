import {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {useJobsContext} from '../context/jobs_context'
import {single_job_url as url} from '../utils/helper';
import styled from 'styled-components'

const SingleJobPage = () => {
  const {id} = useParams()
  const {
    single_job_loading: loading, 
    single_job_error: error, 
    single_job: job,
    fetchSingleJob 
  } = useJobsContext()

    useEffect(() => {
      fetchSingleJob(`${url}${id}`)
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const {
      title,
      description,
      city,
      state
    } = job
  
    if(loading){
      return <p>loading...</p>
    }
    if(error){
      return <p>error...</p>
    }
    
  return (
    <Wrapper>
      <header className='jobs_img'></header>
      <section>
          <div className="bar"></div>
          <div className="listings_content">
            <h4>{title}</h4>
            <h5>{city}, {state}</h5>
          </div>


        <div>
          <h4>Description</h4>
           <p>{description}</p>
        </div>
       
        </section>
      
        
       
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
 section {
    width: 1200px;
    max-width: 95%;
    margin: 5em auto;
  }
`

export default SingleJobPage