import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';
import {BsTelephone} from 'react-icons/bs'
// import {AiOutlineMail} from 'react-icons/ai'
import {CiLinkedin} from 'react-icons/ci'


function ContactForm(){
    const [state, handleSubmit] = useForm("xnqyanzz");

    const funky = (e) => {
        e.preventDefault()
        handleSubmit()
    }
  return (
    <Wrapper>
        <div className="footer_container">

            
            <h3 className='footer_title'>We look forward to hearing from you. Please 
                                        feel free to contact us by phone or email.</h3>


            <div className='footer_logo__call'>
                <div className='logo_call'>
                     <BsTelephone className='logo_call__item'/>
                </div>
                <div className='footer_logo__contact'>
                    <p>Phone</p>
                    <p>503-232-8822</p>
                </div>
            </div>

            <div className='footer_logo__linkedin'>
                <div className='logo_linkedin'>
                      <CiLinkedin   className='logo_linkedin__item' />
                </div>
                <div className='footer_logo__contact'>
                    <p>LinkedIn</p>
                    <a href='https://www.linkedin.com/in/mary-frances-hunter/'>Mary Frances Hunter</a>
                </div>
            </div>
            
           

            <form onSubmit={() => funky} action="https://formspree.io/f/xnqyanzz" method="POST" className='form'>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="name" 
                    name="name"
                />
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />
                <label htmlFor="email">
                    Email
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                 <label htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="6"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>

        </div>
        <p className='date'>Recruiter Extraordinaire {new Date().getFullYear()}</p>

    </Wrapper>
  )
}
function App() {
    return (
      <ContactForm />
    );
  }

const Wrapper = styled.footer`
    
    background: var(--clr-bg-pane);
    height: auto;
    padding-bottom: 3em;

    .date {
        text-align: center;
        padding-top: 1em;
        color: var(--clr-reg-text)
    }
    
    .footer_container {
        width: 1200px;
        max-width: 95%;
        margin: 0 auto; 
        padding-top: 2em;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        row-gap: 10px;
        column-gap: 20px;

        

        grid-template-areas: 
        "title title form form"
        "call call form form"
        "email email form form"
        ". . . date"
        
    }

    .footer_title {
        grid-area: title;
        display: grid;
        align-items: center;
        color: var(--clr-reg-text);
        font-weight: normal;
        margin-bottom: 0;
    }
    .footer_logo__contact p:first-child {
        color: var(--clr-reg-text);
        font-size: 1.2rem;
    }
    .footer_logo__contact p:nth-child(2) {
        color: var(--clr-reg-text);
        
        font-weight: normal;
    }
    .footer_logo__call {
        grid-area: call;

        display: grid;
        grid-template-columns: .4fr 2fr;

        align-items: center;
    }
    .footer_logo__linkedin{
        grid-area: email;
        display: grid;
        grid-template-columns: .4fr 2fr;
        align-items: center;
    }
    
   .logo_linkedin, .logo_call {
        position: relative;
        font-size: 2.5rem;
        background: var(--clr-brown-text);
        display: inline-block;
        border-radius: 50%;
        height: 80px;
        width: 80px;
    }
    .logo_linkedin__item, .logo_call__item {
        position: absolute;
        top: 20px;
        left: 20px;
        color: var(--clr-reg-text);
    }

    .services {
        grid-area: services;

        display: grid;
        grid-template-columns: .5fr .5fr;
    }



     .footer_content {
        display: grid;
        grid-template-columns: 1fr;
        border: 1px solid orange;
    }
    .form {
        display: grid;
        grid-template-columns: minmax(350px, 1fr);
        grid-area: form;
        
    }
   input, textarea {
     width: 600px;
     max-width: 100%;
     font-family: inherit;
     font-size: 1.2rem;
     text-indent: 6px;
     background: var(--clr-bg-textbox);
     border: none;
   }

   input:focus, textarea:focus {
    outline: none;
   }

   input {
    padding: .5em 0;
   }

   label {
    display: inline-block;
    padding-top: 1em;
    font-size: 1rem;
    color: var(--clr-reg-text);
   }

   button {
    background: var(--clr-btn);
    border: none;
    padding: 1em 0;
    font-size: 1.2rem;
    color: var(--clr-reg-text);
    margin-top: 1em;
    cursor: pointer;
    transition: .2s ease-in-out;
   }
   button:hover {
    background: var(--clr-btn-hover);
   }

   a {
    color: var(--clr-reg-text)
   }
   @media screen and (max-width: 1020px){

    .footer_container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 10px;
        column-gap: 20px;

        grid-template-areas: 
        "title title"
        "form form"
        "call email"
    }

    input, textarea {
    width: 1020px;
     max-width: 100%;
     font-family: inherit;
     font-size: 1.2rem;
     text-indent: 3px;
     background: var(--clr-apply-text-box);
     border: none;
   }

  
   .footer_logo__contact p:first-child {
    display: none;
   }

   .footer_logo__email, .footer_logo__call {
    padding-top: 1em;
   }
    .logo_email, .logo_call {
        position: relative;
        font-size: 1.5rem;
        background: transparent;
        display: inline-block;
        height: 40px;
        width: 40px;
    } 

    .logo_email__item, .logo_call__item {
        position: absolute; 
        top: 10px;
        left: 10px;
        color: var(--clr-reg-text);
    } 

   }
`

export default App