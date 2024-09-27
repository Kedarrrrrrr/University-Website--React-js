import React from 'react'
import './Contact.css'
import msg_icon from'../../assets/msg-icon.png'
import mail_icon from'../../assets/mail-icon.png'
import phone_icon from'../../assets/phone-icon.png'
import location_icon from'../../assets/location-icon.png'
import white_arrow from'../../assets/white-arrow.png'




const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "12237ee4-5c1b-4f1c-8750-d391ad88fc33");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res)=>res.json());
  
      //const data = await response.json();
  
      if (res.success) {
        console.log("Success",res);
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li> <img src={mail_icon} alt="" />Contact@educity@gmail.com</li>
                <li> <img src={phone_icon} alt="" />+1 582-549-6540</li>
                <li> <img src={location_icon} alt="" />77 Massachusetts Aye, Cambridge<br/>MA 02139,United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                    <input type="text" name='' placeholder='Enter your Name'
                    required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your Mobile Number'
                required/>
                <label>Write your Messages here</label>
                <textarea name=" message" rows="6" placeholder='Enter your message' required></textarea>

                <button type='submit' className='btn dark-btn'> Submit Now <img src={white_arrow} alt="" /></button>

            </form>
            <span>{ result }</span>
        </div>

      
    </div>
  )
}

export default Contact
