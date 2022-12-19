import {Footer} from '../components';
import styled from 'styled-components'

const Listings = () => {
  return (
    <Wrapper>
        <header className='listings_img'></header>
        <section>
          <div className="bar"></div>
          <div className="listings_content">
            <h4>JOB OPPORTUNITIES</h4>
            <h5>EXPLORE OUR CURRENT LISTINGS</h5>
          </div>
        </section>
        <Footer />
    </Wrapper>
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
        background-color: var(--clr-turquoise-light);
        margin-bottom: .75em;
    }
    h4 {
        color: var(--clr-text-medium-brown);
        font-weight: normal;
    }
    h5 {
        color: var(--clr-brown);
        font-weight: normal;
    }
`

export default Listings