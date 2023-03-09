import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

function About() {
  return (
    <div>
        <h1 className='text-6xl mb-4'>Github Finder</h1>
        
        <p className='mb-4 text-2xl font-light'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Consectetur, recusandae?
        </p>
        <button className='btn btn-gosht'>
            <FaHome className='mr-2' />
            <Link to='/'>Go Back Home</Link>
        </button>   
    </div>
  )
}

export default About