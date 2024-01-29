import { Link } from 'react-router-dom'
import React from 'react'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>
            Have a project in mind? <br className='sm:block hidden'/>Let's bulid something togheter!
        </p>
        <Link to='/contact' className='btn'>Contact</Link>
    </section>
  )
}

export default CTA