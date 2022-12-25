import {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {useJobsContext} from '../context/jobs_context'
import {single_job_url as url} from '../utils/helper';

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
      description
    } = job
  
    if(loading){
      return <p>loading...</p>
    }
    if(error){
      return <p>error...</p>
    }
    
  return (
    <div>
        SingleJobPage
        <p>{title}</p>
        <p>{description}</p>
       
    </div>
  )
}


export default SingleJobPage