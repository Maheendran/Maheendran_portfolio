import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

import { motion } from "framer-motion";
const Contact = () => {
    const form=useRef()

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f7oqhwa','template_y7fvw7q',form.current,'sF9ZqI5aNSsi0f5Iw')
    .then((result) => {
document.getElementById('status').innerText='success'
setTimeout(()=>{
    document.getElementById('status').innerText=''
},5000)
    }, (error) => {
        document.getElementById('status').innerText='mail sending failed'
        setTimeout(()=>{
            document.getElementById('status').innerText=''
        },5000)
    } )
    e.target.reset();
    }
    return (
    <div>
        <div className="dummy mt-3" id='contact'></div>
    <div className='contact-container' >

    <div className='contact-heading'>
    <h1 className='heading text-center'>Take A Coffee And Chat With Me</h1>
    </div>

    <div className='contact-main-section' >
    <div className='contact-left'>
    <img  src="https://media.giphy.com/media/bY0eGUbaWbRi8/giphy.gif" alt="" />
    </div>
    <div className='contact-right'>

    {/* <div className='form-input'>
    <form ref={form} onSubmit={sendEmail}>
    <input type="text" placeholder='name' name='user_name' />
    <input type="email" placeholder='email'name='email_id'   required/>
    <input type="number" placeholder='mobile number' name='mobile'  required />

    <div id='messege-input'>

    <textarea type="text"  placeholder='message'  name='message'/> <br />
    </div>
    <button type='submit'>SEND</button>
    </form>
    <p id='status'style={{color:'green'}} ></p>
    </div> */}
       <div >
        <h1 className="headingOne">        
          Let's make something <br />       
             amazing together.
        </h1>
        <h2 className="headingLast">
          Start by{" "}
          <a  href="mailto:maheendrankp100@gmail.com">
             saying hi
          </a>
       </h2>
       </div>


    </div>
    </div>

    </div>
    </div>

//     <motion.section
 
//     initial="hidden"
//     whileInView="show"
//     viewport={{ once: false, amount: 0.25 }}

//   >
//     <div style={{ overflow: "hidden" }}>
//       <span className="primaryText">Take a coffe And Chat With Me</span>
//     </div>
//     <motion.div

//       className={`innerWidth yPaddings flexCenter `}
//     >
//       <div  id="people">
//         <span className="primaryText">
//           Let's make something <br />
//           amazing together.
//         </span>
//         <span className="primaryText">
//           Start by{" "}
//           <a  href="mailto:maheendrankp100@gmail.com">
//             saying hi
//           </a>
//         </span>
//       </div>

//       <div >
//         <img
//           style={{ width: "80%" }}
//           src="https://media.giphy.com/media/bY0eGUbaWbRi8/giphy.gif"
//           alt=""
//         />
//       </div>
//     </motion.div>
//   </motion.section>
    )
}

export default Contact