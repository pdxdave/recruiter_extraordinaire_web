import styled from 'styled-components'
import {Link} from 'react-router-dom'

// link to singleJobPage is here

const Job = ({jobs}) => {
  return (
    <Wrapper>
      {jobs.map((job) => {
        const {id, title, stack, city, state} = job
        return (
        
              <article key={id}>
                  <h5>{title}</h5>
                  <div className='location'>
                    <p>{city}, {state}</p>
                  </div>
                  <p>Stack: {stack}</p>
                    <Link to={`/jobs-page/${id}`}>
                        More Details
                    </Link>
              </article>
          )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`

  margin: 2em 0;

  article {
    margin: 1.2em 0;
    padding: 1em;

    box-shadow: -1px 4px 6px 1px rgba(0,0,0,0.2);
    -webkit-box-shadow: -1px 4px 6px 1px rgba(0,0,0,0.2);
    -moz-box-shadow: -1px 4px 6px 1px rgba(0,0,0,0.2);
    border-radius: var(--radius);
  }

  
  h5, .location{
    text-transform: capitalize;
  }
  h5 {
    margin-bottom: 0;
  }
  p {
    color: black;
  }
`

export default Job