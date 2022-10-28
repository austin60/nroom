import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fd5of48', 'template_8gpsrcg', form.current, 'PgEmoPELDtiSAFBWh')
      .then((result) => {
          console.log(result.text);
          console.log("sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='mess-form'>
    <form ref={form} onSubmit={sendEmail} className="container" id='mess'>
       <h4>Write to us</h4>
      <label>Name</label><br/>
      <input type="text" name="user_name" placeholder='enter name' required className='form-control' /><br/>
      <label>Email</label><br/>
      <input type="email" name="user_email" placeholder='example@gmail.com' required  className='form-control'/><br/>
      <label>Message</label><br/>
      <textarea name="message" className='form-control' required placeholder='enter message'/><br/>
      <input type="submit" value="Send"  className='btn'/>
    </form>
    </div>
  );
};
export default Email;