import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>what skills i have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">

          <h3>Frontend Devolepment</h3>
        <div className="experience__content"></div>
        <article className='experience__detail'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <h4>HTML</h4>
          <small className='text-light'>Intermediate</small>
        </article>

        <article className='experience__detail'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <h4>CSS</h4>
          <small className='text-light'>Intermediate</small>
        </article>

        <article className='experience__detail'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <h4>React</h4>
          <small className='text-light'>Intermediate</small>
        </article>

        <h3>Backend Devolepment</h3>
        <div className="experience__content"></div>
        <article className='experience__detail'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <h4>Mysql</h4>
          <small className='text-light'>Intermediate</small>
        </article>

        <article className='experience__detail'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <h4>Php</h4>
          <small className='text-light'>Intermediate</small>
        </article>

        <article className='experience__detail'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <h4>Python</h4>
          <small className='text-light'>Intermediate</small>
        </article>

        </div>
      </div>
      
      </section>
  )
}

export default Experience