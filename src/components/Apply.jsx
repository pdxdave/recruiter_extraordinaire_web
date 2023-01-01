import styled from 'styled-components';
import {useRef} from 'react'
import emailjs from '@emailjs/browser';

const Apply = ({closeModal}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_2kr6q4j', 
        'template_bvxvzoi', 
        form.current, 
        'isPpBt_NU6_KrRqlQ'
      )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Wrapper>
      <div className="modal-background">
        <div className="modal-container">
          <p className='btn-close' onClick={() => closeModal(false)}>X</p>
          <p className='apply-message'>We look forward to hearing from you. Please attach a copy of your most current resume</p>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
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
  /* right: 0; */
  top: ;
  max-width: 420px;
  height: 50vh;
  background-color: #f2f2f2;
  box-shadow: rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
}
form {
  padding: 5%;
}
label {
  display: block;
  width: 378px;
  max-width: 100%;
}
input[type="text"], input[type="email"], textarea{
  padding: .25em;
  font-size: 1.2rem;
  width: 95%;
}
.btn-close {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
}
.apply-message {
  padding: 3em 5% 1em 5%;
}
`

export default Apply