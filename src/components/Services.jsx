import styled from 'styled-components';
import {services} from '../data/services'


const Services = () => {

  return (
    <Wrapper>
        <div className="services_container">
            <div className="bar"></div>
            <div className="services_content">
                <h4>SERVICES</h4>
                <h5>SERVICES TO MEET ALL YOUR NEEDS</h5>
            </div>
            <div className='services_container__cards'>
                {services.map(service => (
                    <article key={service.id}>
                      <h4>{service.title}</h4>  
                      <p>{service.text}</p>
                    </article>
                ))}
            </div>
            
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    background: var(--clr-bg-pane);
    height: 450px;

    .services_container {
        width: 1200px;
        max-width: 95%;
        margin: 0 auto;   
    }
    .bar {
        display: inline-block;
        height: 10px;
        width: 120px;
        background-color: var(--clr-btn);
        margin-top: 2em;
        margin-bottom: .75em;
    }

    .services_content h4 {
        color: var(--clr-reg-text);
        font-weight: normal;
    }
    .services_content h5 {
        color: var(--clr-brown-text);
        font-weight: normal;
    }

    .services_container__cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        row-gap: 20px;
        column-gap: 50px;
        padding-top: 1.5em;
    }

    .services_container__cards h4 {
        color: var(--clr-brown-text);
        font-weight: normal;
    }

    article {
        background: var(--clr-bg-cards);
        padding: 2em;
        height: auto + 100px;
        border-radius: 12px; 
        box-shadow: 0px 9px 31px -14px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 9px 31px -14px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 9px 31px -14px rgba(0,0,0,0.75);
    }
    p {
        color: var(--clr-gray-text);
    }

   @media screen and (max-width: 1250px){
        height: auto;
        padding-bottom: 50px;
        transition: all .4s ease-in-out;
   }

   
`

export default Services