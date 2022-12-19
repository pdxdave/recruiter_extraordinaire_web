import styled from 'styled-components';
import {testimonials} from '../data/testimonials'

const Testimonials = () => {
  return (
    <Wrapper>
        <div className="bar"></div>
        <div className="testimonial_container">
            <div className="testimonial_content">
                <h4>TESTIMONIALS</h4>
                <h5>WHAT PEOPLE ARE SAYING ABOUT US</h5>
            </div>
            <div className='testimonial_container__cards'>
                {testimonials.map(testimonial => (
                    <article key={testimonial.id}>
                      <p>{testimonial.text}</p>
                      <footer>
                        <h5>{testimonial.name}</h5>
                        <p>{testimonial.job}</p>
                        <p>{testimonial.company}</p>
                      </footer>
                    </article>
                ))}
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    
    width: 1200px;
    max-width: 95%;
    margin: 8em auto 5em;

    .bar {
        display: inline-block;
        height: 10px;
        width: 120px;
        background-color: var(--clr-btn);
        margin-bottom: .75em;
    }

    .testimonial_content h4 {
        color: var(--clr-gray-text);
        font-weight: normal;
    }
    .testimonial_content h5 {
        color: var(--clr-brown-text);
        font-weight: normal;
    }

    .testimonial_container__cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        row-gap: 20px;
        column-gap: 50px;
        padding-top: 1.5em;
        color: var(--clr-gray-text);
    }
    article {
        position: relative;
        height: auto;
        padding-bottom: 6em;
    }
    footer {
        position: absolute;
        bottom: 0;
    }
    footer h5 {
        font-weight: 600;
    }
    footer p:nth-child(3){
        font-style: italic;
    }
`

export default Testimonials