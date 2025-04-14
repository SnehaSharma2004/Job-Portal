import React from 'react'
import Navbar from './shared/Navbar'
import Job from './job'
const randomJobs=[1,2,3]
const Browse = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <h1>Search Result {randomJobs.length}</h1>
        {
          randomJobs.map((item,index)=>{
            return(
              <Job/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Browse
