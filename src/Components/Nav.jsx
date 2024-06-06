import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Nav.css'

const Nav = () => {
    const [showMenu,setshowMenu]=useState(false);
    return (
        <nav className='nav'>
            <img src='https://t4.ftcdn.net/jpg/04/76/29/29/240_F_476292937_XDoPENQJxzTfpPLlkxdcURv04PBuT6C1.jpg' alt='' className='logo'></img>
            <div className='contents'>
                <Link activeclass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}className='list'>About</Link>
                <Link activeclass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className='list'>Skills</Link>
                <Link activeclass='active' to='work' spy={true} smooth={true} offset={-100} duration={500}className='list'>Portfolio</Link>
                
                <Link activeclass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='list'>Contact</Link>


            </div>
            <button className='btn' onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
           
                <img src='https://img.freepik.com/premium-photo/vintage-style-home-phone-with-notebook-diary-grunge-wooden-table_1428-1390.jpg?size=626&ext=jpg&ga=GA1.1.1179112862.1716282798&semt=ais_user' alt='' className='img'/>Let's talk</button>

                <img src='https://t3.ftcdn.net/jpg/04/66/11/28/240_F_466112869_yOvI87OIHUJeOhNW7WkXIL1lB1Cc5t1c.jpg' alt='menu' width="50px" height="50"className='menu' onClick={()=>setshowMenu(!showMenu)}></img>
            <div className='contentsmenu' style={{display:showMenu? 'flex' : 'none'}}>
                <Link activeclass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}className='listmenu' onClick={()=>setshowMenu(false)}>About</Link>
                <Link activeclass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className='listmenu' onClick={()=>setshowMenu(false)}>Skills</Link>
                <Link activeclass='active' to='work' spy={true} smooth={true} offset={-50} duration={500}className='listmenu' onClick={()=>setshowMenu(false)}>Portfolio</Link>
                
                <Link activeclass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listmenu' onClick={()=>setshowMenu(false)}>Contact</Link>


            </div>

          
        </nav>
    );
};

export default Nav;