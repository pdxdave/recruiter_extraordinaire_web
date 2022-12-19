import styled from 'styled-components';
import meeting from '../assets/about_meeting.jpg'

const About = () => {
  return (
    <Wrapper>
        <div className="bar"></div>
        <div className='about_container'>
            <div className='about_content'>
                <h4>WHERE TECHNOLOGY MEETS OPPORTUNITY</h4>
                <h5>TRUSTED COLLABORATION LEADS TO SUCCESS</h5>
                <p>Mary Frances Hunter, the founder of Recruiter Extraordinaire, 
                    began her successful career in the heart of Silicon Valley,
                    where the cutting edge of technology we know and use today,
                    began.  She is solely responsible for putting together 
                    IBM's first Object Technology Practice team.  With the 
                    creation of Recruiter Extraordinaire, she has continued
                    to impact companies large and small with her ability to find
                    the niche talent successful companies require.
                </p> 
            </div>
            <img src={meeting} alt="team members meeting" />
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    width: 1200px;
    max-width: 95%;
    margin: 5em auto;

    .about_container {
      display: grid;
      grid-template-columns: .75fr 1fr;
      column-gap: 40px;
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
    }
    p {
        font-size: 1.2rem;
        color: var(--clr-gray-text);
    }
    
    img {
        width: 100%;
        border-radius: 10px;
    }
   
    @media screen and (max-width: 1120px){
      .about_container {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 20px;
      }
    }
    

`
export default About