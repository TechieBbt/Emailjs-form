import React, {useRef, useState} from 'react'
import './form.css';
import emailjs from '@emailjs/browser';



const Result = () => {
    return (
        <p>Your message has been successfully sent. We will contact you soon.</p>
    )
}

const Form = () => {
    const [result, showResult] = useState (false, true)
    const Form = useRef ()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_xf886ml", "template_gjcikvm", Form.current, "pguG71KOWqhnqdIXK")
        .then(
            (result) => {
                console.log(result.text);
                console.log("Your message has been successfully sent. We will contact you soon.")
            },
            (error) => {
                console.log(error.text);
            }
        );
        Form.current.reset();
        showResult(true);
    };
    setTimeout(() => {
        showResult(false);
    },5000 );
  return (
    <div className="contactForm">
        <form className="contact" ref={Form} onSubmit={sendEmail}>
            <div className="heading">Drop a Message</div>
            <div className="name">
                <input type="name" name="User_name" placeholder='Full Name' required/>
            </div>
            <div className="name">
                <input type="email" name="User_email" placeholder='Email' required/>
            </div>
            <div className="name">
                <input type="tel" name="User_phone" placeholder='Phone'required/>
            </div>
            <div className="message">
                <input type="text" name="User_message" placeholder='Message'/>
            </div>
            <div className="btn">
                <button><span>Submit</span></button>
            </div>
            <div className="row"> {result ? <Result/> : null} </div>
        </form>
    </div>
  )
}

export default Form