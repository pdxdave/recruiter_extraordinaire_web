import styled from 'styled-components'
import {Link} from 'react-router-dom'

// link to singleJobPage is here

const Job = ({jobs}) => {
  return (
    <Wrapper>
      {jobs.map((job) => {
        const {id, title} = job
        return (
          <article key={id}>
              <p>{title}</p>
              <Link to={`/jobs-page/${id}`}>
                more info
              </Link>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.article`
  
`

export default Job