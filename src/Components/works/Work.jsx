import React from 'react';
import './Work.css'

const Work = () => {
    return (
       <section id='work'>

        <h2 className='worktitle'>My Portfolio</h2>
        <span className='workdes'> I take Pride i paying attension to the smallest details and making sure that my work is pixel perfect I am excited to bring my skill and experience to help businesses achive their goals and create a strong online presence</span>
        <div className='workimgs'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_tdsQxi2ZNYS80ae9gh1zlbWE4GEWqSY8_XouRi12Xin8gPQQ' alt='' className='workimg'/>
            <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAWqYnWCHZKwpPG4QnUyyXIe61ii4Arq5YwzDpM5m6P0ggiJpX' alt='' className='workimg'/>
            <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSetbHDtMQni5de_Maaz5jHb2gH8faPi_NIWxc0VBZWpy0tjIf0' alt='' className='workimg'/>
            <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQEmJfkPH45DLeUs3MoJYFNVwuS_RGvaTYVUHLVsiduGQCl7itr' alt='' className='workimg'/>
            <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTSTRt_MoLDCe1u0Ww0FzThs4v_tbPaot7AWragdhWAghl-qjFL' alt='' className='workimg'/>
            <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDhIjT_sYLIxwni94Di55cPThmeCfDkjcu9hKsfDwC3kxkS7Ua' alt='' className='workimg'/>

        </div>
        <button className='b'>See More</button>


       </section>
    );
};

export default Work;