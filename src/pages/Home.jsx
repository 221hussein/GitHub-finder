import React from 'react'
import UserResult from '../components/users/UserResult'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <>
        {/* <h1 className='text-6xl mb-8'>Find Your Profile</h1> */}
        <UserSearch />
        <UserResult />
    </>
  )
}

export default Home
