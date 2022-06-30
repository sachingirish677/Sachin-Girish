import React from 'react'
import './about.css'
import me from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {MdOutlineLibraryBooks} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
       <h5>Get to know</h5>
       <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="about Image" />
          </div>
        </div>

      <div className="about__content">
        <div className="about__cards">

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>Fresher</small>
          </article>

       
          <article className='about__card'>
            <MdOutlineLibraryBooks className='about__icon'/>
            <h5>Projects</h5>
            <small> 3 </small>
          </article>

        </div>
        <p>Hi,iam Sachin Girish.............................................
        ....................................................................
        .................................................................... 

        </p>
        <a href="contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
      </section>
  )
}

export default About