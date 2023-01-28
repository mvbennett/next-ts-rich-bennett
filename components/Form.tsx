import { useState } from "react";

interface props {
    handleChange: any,
    handleSubmit: any
  }


const Form = ({ handleChange, handleSubmit }:props) => {
  // const [message, setMessage] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   message: ''
  // });

  // const [valid, setValid] = useState(false);

  // const [submitted, setSubmitted] = useState(false);

  // const checkName = () => {
  //   return message.name.length > 2;
  // }

  // const checkMessage = () => {
  //   return message.message.length > 10;
  // }

  // const checkPhone = () => {
  //   const phonexp = RegExp(/^\d{10}$/);
  //   return phonexp.test(message.phone);
  // }

  // const checkEmail = () => {
  //   const regexp = RegExp(/(\w|\d)*@(\w|\d)*\.(\w|\d)*/)
  //   console.log(`email in func: ${regexp.test(message.email)}`);
  //   return regexp.test(message.email);
  // }

  // const checkValidity = () => {
  //   console.log(`name :${checkName()}`);
  //   console.log(`message: ${checkMessage()}`);
  //   console.log(`email: ${checkEmail()}`);
  //   console.log(`phone: ${checkPhone()}`);


  //   console.log(`full check: ${checkName() && checkMessage() && checkEmail()}`);


  //   if (checkName() && checkMessage() && checkEmail() && checkPhone()) {
  //     console.log('all valid now!');
  //     setValid(true);
  //   } else {
  //     setValid(false);
  //   }
  // }

  // const handleChange = (e :any) => {
  //   console.log(e.target.value);
  //   setMessage({...message, [e.target.name]: e.target.value})
  //   checkValidity();
  // }

  // const handleSubmit = (e :any) => {
  //   e.preventDefault()
  //   if (valid) {
  //     console.log(`this is your message: From: ${message.name}\n at ${message.email} & ${message.phone}\n content: ${message.message}`);
  //     setSubmitted(true)
  //   } else {
  //     console.log('invalid!');
  //   }

  // }
  return (
    <div className="form">
      <h2>
        Contact Me to schedule a session:
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="name">
            Name:
            <input type="text" name="name" placeholder="Mike Bennett" onChange={handleChange} />
          </label>
          <label htmlFor="email">
            Email:
            <input type="text" name="email" placeholder="rich@richbennettproductions.com" onChange={handleChange} />
          </label>
          <label htmlFor="phone number">
            Phone number:
            <input type="text" name="phone" placeholder="2128675309" onChange={handleChange} />
          </label>
        </div>
        <div className="row">
          <label htmlFor="message">
            Your message:
            <textarea name="message" id="message" cols={30} rows={20} onChange={handleChange} ></textarea>
          </label>
        </div>
        <button className="send-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
