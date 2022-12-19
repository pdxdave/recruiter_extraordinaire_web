import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  
  return (
    <Wrapper className='header_img'>
        <div className="header_content">
            <div className='header_logo'>
                <h2>Recruiter</h2>
                <h2>Extraordinaire</h2>
            </div>
            <div className="header_pitch">
                <h1>YOUR TECHNOLOGY</h1>
                <h1>STAFFING SOLUTION</h1>
                <p className='header_pitch__content'>
                  For over 30 years Recruiter Extraordinaire has staffed
                  leading software engineering companies with their most 
                  difficult to find talent.  We know tech.  We know how to fill 
                  your needs.
                </p>
                <div className='header_search_jobs'>
                  <button onClick={() => navigate('/listings')}>Search Jobs</button>
                </div> 
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  
  position: relative;

  .header_content {
    width: 1200px;
    max-width: 95%;
    margin: 0 auto;
  }

.header_logo {
  position: absolute;
  top: 5%;
  color: var(--clr-reg-text);
}
.header_logo h2:first-child, .header_pitch h1:first-child{
  margin-bottom: 0;
}
.header_logo h2:nth-child(2){
  padding-bottom: 2px;
  border-bottom: 6px solid var(--clr-brown-text);
}

.header_pitch {
  position: absolute;
  top: 30%;
  color: var(--clr-reg-text);
}

.header_pitch__content {
  max-width: 550px;
}

.header_search_jobs button {
  background-color: var(--clr-btn);
  margin-top: 1em;
  border: none;
  font-size: 2rem;
  color: var(--clr-reg-text);
  padding: 1rem;
  cursor: pointer;
  border-radius: var(--radius);
  transition: .2s ease-in-out;
}

.header_search_jobs button:hover {
  background-color: var(--clr-btn-hover);
}

@media screen and (max-width: 413px){
    .header_pitch h1{
      font-size: 2rem;
    }
    
    .header_search_jobs button {
      font-size: 1.5rem;
    }
  }

`

export default Header

