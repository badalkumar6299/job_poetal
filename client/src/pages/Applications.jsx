import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Applications = () => {

const[isEdit,setEdit] = useState(false)

  return (
    <div>
      <Navbar/>
      <h2>Your Resume</h2>
      <div>
        {
          isEdit ?<>
          </>:
          <div>
            <a href="">Resume</a>
            <button>Edit</button>
            </div>
        }
      </div>
    </div>
  )
}

export default Applications
