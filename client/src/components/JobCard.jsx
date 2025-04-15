import React from 'react'
import PropTypes from 'prop-types'; 
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'

const JobCard = ({ job }) => {
  // Validate props


const navigate = useNavigate()

  return (
    <div className='p-6 border rounded shadow'>
      <div className='flex items-center justify-between'>
        <img className='h-8' src={assets.company_icon} alt=''/>
      </div>
      <h4 className='mt-2 text-xl font-medium'>
        {job.title}
      </h4>
      <div className='flex items-center gap-3 mt-2 text-xs'>
        <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>{job.location}</span>
        <span className='bg-red-50 border border-red-200 px-4 py-1.5 rounded'>{job.level}</span>
      </div>
      <p className='mt-4 text-sm text-gray-500' dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
      <div className='flex gap-4 mt-4 text-sm'>
        <button onClick={()=>{navigate(`/apply-job/${job._id}`);scrollTo(0,0)}} className='px-4 py-2 text-white bg-blue-600 rounded'>Apply Now</button>

        <button onClick={()=>{navigate(`/apply-job/${job._id}`);scrollTo(0,0)}} className='px-4 py-2 text-gray-500 border border-gray-500 rounded'>Learn more</button>

      </div>
    </div>
  )
}

JobCard.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard;
