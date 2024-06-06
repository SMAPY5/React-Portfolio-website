import React from 'react';
import './Skill.css'
const Skill = () => {
    return (
       <section id='skill'>
       <span className='title'>What I do </span>
       <span className='dis'>i am java full stack developer and i am fresher i know basic knowledge in reactjs Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, pariatur cupiditate laudantium perferendis sed fuga tempore inventore quas dignissimos, dolorem itaque quia perspiciatis eum iure nesciunt accusantium corrupti vitae quisquam!</span>
       <div className='bars'>
        <div className='bar'>
            <img src='https://img.icons8.com/?size=80&id=dhecLjnptiQg&format=png' alt='' className='barimg'/>
            <div className='bartext'>
                <h2>Front end developer</h2>
                <p>I have good knowledge in HTML, CSS , Javascript and BootStrap</p>

            </div>

        </div>
        <div className='bar'>
            <img src='https://img.icons8.com/?size=64&id=WMvhDPZBJ9X2&format=png' alt='' className='barimg'/>
            <div className='bartext'>
                <h2>Backend developer</h2>
                <p>I have good SKIlled in Core Java, Avanced Java,REST API</p>

            </div>

        </div>
        <div className='bar'>
            <img src='https://img.icons8.com/?size=48&id=90519&format=png' alt='' className='barimg'/>
            <div className='bartext'>
                <h2>Spring boot</h2>
                <p>I have Basic knowledge in SpringBoot and REST Service Content Negotiation with JSON and XML.</p>

            </div>

        </div>

       </div>

       </section>
    );
};

export default Skill;