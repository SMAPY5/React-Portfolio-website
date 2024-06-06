import React from 'react';
import './Intro.css'
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='text'>
               <span className='hello'>Hello,</span>
               <span className='introtext'>I'm<span className='nam'>Mounika</span><br/>Full Stack Java Developer</span>
               <p className='para'>I am a Skilled Full Stack Java Developer in Creating Web Application websites</p>
               <button className='hire'>Hire Me</button>

            </div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbPfWeFuPtuZHgNPW1YK5sOskiJoMRD-7dUgnzjcbPhG4UG1vZEfwbce1-wa_OpyzCds&usqp=CAU' alt='Profile' className='bg'/>

        </section>
    );
};

export default Intro;