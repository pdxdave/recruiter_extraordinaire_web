
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';


const Apply = ({closeModal, title}) => {
  const [state, handleSubmit] = useForm("xnqyanzz");
 

  const funky = (e) => {
    e.preventDefault()
    handleSubmit()
  }


  return (
    <Wrapper>
      <div className="modal-background">
        <div className="modal-container">
          <p className='btn-close' onClick={() => closeModal(false)}>X</p>
          <p className='apply-message'> Thank you for your interest in the <span>{title}</span> opportunity.  Let us know
          a good day/time to talk.  Please include phone number and time zone.</p>
          <form onSubmit={() => funky} action="https://formspree.io/f/xnqyanzz" method="POST" className='form'>
              <input
                    id="job"
                    type="job" 
                    name="job"
                    value={title}
                    hidden
                />
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
                <button type="submit" disabled={state.submitting} className="btn-submit">
                    Submit
                </button>
            </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  
  .modal-background {
  width: 100%;
  height: 100%;
  background-color: rgba(31, 41, 55, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999 !important;
}

.modal-container {
  position: absolute;
  top: ;
  max-width: 340px;
  height: auto;
  background-color: #f2f2f2;
  box-shadow: rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  padding-bottom: 5em;
  border-radius: var(--radius);
}
form {
  padding: 5%;
}
label {
  display: block;
  width: 378px;
  max-width: 100%;
}
input[type="name"], input[type="email"], textarea{
  padding: .25em;
  font-size: 1.2rem;
  width: 95%;
}
.btn-close {
  position: absolute;
  top: 0;
  right: 15px;
  font-size: 1.5rem;
  cursor: pointer;
}
.apply-message {
  padding: 3em 5% 1em 5%;
}

.btn-submit {
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

.btn-submit:hover {
  background-color: var(--clr-btn-hover);
}
span {
  font-weight: bold;
}
`

export default Apply