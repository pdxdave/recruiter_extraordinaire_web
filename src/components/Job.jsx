import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {TbStack2} from 'react-icons/tb'
import {MdDescription} from 'react-icons/md'

// link to singleJobPage is here

const Job = ({jobs}) => {
  return (
    <Wrapper>
      {jobs.map((job) => {
        const {id, title, stack, city, state, description} = job
        return (
        
              <article key={id}>
                  <p className='title'>{title}</p>
                  <div className='location'>
                    <MdLocationOn />
                    <p>{city}, {state}</p>
                  </div>

                  <div className='stack'>
                    <TbStack2 className='bla'/>
                    <p>{stack}</p>
                  </div> 
                 
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
  }


  .title {
    font-size: 1.2rem;
    text-transform: capitalize;
    color: var(--clr-brown-text);
  }
  .location {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    p {
      margin-left: .5em;
    }
  }

  .stack {
    display: grid;
    grid-template-columns: .01fr 1fr;
    align-items: center;
    p {
      margin-left: .5em;
    }
  }

  @media screen and (max-width: 647px){
    .stack {
      align-items: start;
    }
    .bla{
      margin-top: .25em;
    }
  }
`

export default Job