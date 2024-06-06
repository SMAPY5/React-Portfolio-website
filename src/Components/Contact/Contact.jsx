import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
       <section id='contactpage'>

        {/* <div id='client'>
            <h1 className='page'>My Client</h1>
            <p>I am the fresher so I am work with reputation company to show my skills </p>

        </div> */}
        <div id='contact'>
            <h1 className='conpage'>Contact Me</h1>
            <span className='condes'>Please fill out the form below to discuss any work opportunities</span>
            <form className='conform'>
                <div className='me'>
                <div>
                <i class="fa-solid fa-phone"></i><br/>
                <i class="fa-regular fa-envelope"></i>
               
               </div>
               <div className='h4'>
               {/* <i class="fa-regular fa-envelope"></i> */}
                <h4 className='p'>Phone:<span>9704974496</span></h4>
                <h4 className='e'>Email:<span className='sp'>mounikayanakanagiri584@gmail.com</span></h4>
               
               
               </div>
               </div>

                <div className='links'>
                   
                    
                    <i className="fa-brands fa-facebook" id='f'></i>
                    <i className="fa-brands fa-youtube" id='y'></i>
                    <i className="fa-brands fa-twitter" id='t'></i>
                    <i className="fa-brands fa-instagram" id='i'></i>

                </div>
                
            </form>


        </div>

       </section>
    );
};

export default Contact;