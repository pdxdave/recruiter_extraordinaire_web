import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import {useJobsContext} from '../context/jobs_context'
import {single_job_url as url} from '../utils/helper';
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import {Apply} from '../components'

const SingleJobPage = () => {
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()
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
      state,
      duties,
      requirements,
      benefits
    } = job
  
    if(loading){
      return <p style={{textAlign: "center", fontSize: "2rem", paddingTop: "3em"}}>Fetching Your Selection</p>
    }
    if(error){
      return <p>error...</p>
    }

    
   
  return (
    <>
    {openModal && <Apply closeModal={setOpenModal} title={title}/>}
    <Wrapper>
      <header className='jobs_img'></header>
      <section>
          <div className="bar"></div>
          <div className="listings_content">
            <h4>{title}</h4>
            <h5>{city}, {state}</h5>
            {/* <button onClick={() => navigate('/jobs-page')} className="btn-jobs">return to jobs</button> */}
          </div>


        <div className='description'>
          <h4>Description</h4>
           <p>{description}</p>
        </div>
        <div className='duties'>
          <h4>Duties</h4>
            <ul>
              {duties && duties.split('.').map((item) => {
                return (
                    <li key={uuidv4()}>{item}</li>
                )
              })}
            </ul>   
        </div>
        <div className='requirements'>
          <h4>Requirements</h4>
            <ul>
              {requirements && requirements.split('.').map((item) => {
                return (
                    <li key={uuidv4()}>{item}</li>
                )
              })}
            </ul>   
        </div>

        <div className='benefits'>
          <h4>Benefits</h4>
            <ul>
              {benefits && benefits.split('.').map((item) => {
                return (
                    <li key={uuidv4()}>{item}</li>
                )
              })}
            </ul>   
        </div>
        <div>
           <button className='btn-interested' onClick={() => setOpenModal(true)}>I'm Interested!</button>
           <button onClick={() => navigate('/jobs-page')} className="btn-jobs">Return To Jobs</button>
        </div>
        </section>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  
 section {
    width: 1200px;
    max-width: 95%;
    margin: 5em auto;
  }


  .bar {
    display: inline-block;
    height: 10px;
    width: 120px;
    background-color: var(--clr-btn);
    margin-bottom: .75em;
    }
  h4 {
    color: var(--clr-gray-text);
    font-weight: normal;
    }
  h5 {
    color: var(--clr-brown-text);
    font-weight: normal;
    text-transform: capitalize;
    }

  ul {
    padding-left: 10px;
  }

  ul li {
    list-style-type: circle;
  }

  .description {
    margin-top: 2em;
  }
  .duties, .requirements, .benefits {
    margin-top: 1em;
  }

  .btn-jobs {
  background-color: var(--clr-brown-text);
  font-family: inherit;
  color: var(--clr-reg-text);
  font-size: 1.2rem;
  padding: .15em .4em;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  /* margin-left: .5em; */
  text-transform: capitalize;
  transition: .2s ease-in-out;
  margin-left: 1em;
}

.btn-jobs:hover {
  background-color: var(--clr-brown-text-hover);
}

.btn-interested {
  background-color: var(--clr-btn);
  font-family: inherit;
  color: var(--clr-reg-text);
  font-size: 1.2rem;
  padding: .15em .4em;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  margin-top: 1em;
  transition: .2s ease-in-out;
}

.btn-interested:hover {
  background-color: var(--clr-btn-hover);
}
`

export default SingleJobPage