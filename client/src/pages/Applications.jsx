import { useState } from 'react';

import Footer from '../components/Footer';
import { assets } from '../assets/assets'
import Navbar from '../components/Navbar';
import moment from 'moment'; 

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);


  const jobsApplied = []; 

  return (
    <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
      <Navbar />
      <h2 className='text-xl font-semibold'>Your Resume</h2>
      <div className='flex gap-2 mt-3 mb-6'>
        {isEdit ? (
          <>

            <button onClick={() => setIsEdit(false)} className='px-4 py-2 bg-green-100 border border-green-400 rounded-lg'>
              Save
            </button>
          </>
        ) : (
          <div className='flex gap-2'>
            <a className='px-4 py-2 text-blue-600 bg-blue-100 rounded-lg' href=''>
              Resume
            </a>
            <button onClick={() => setIsEdit(true)} className='px-4 py-2 text-gray-500 border border-gray-300 rounded-lg'>
              Edit
            </button>
          </div>
        )}
      </div>
      <div>
        <h2 className='mb-4 text-xl font-semibold'> Jobs Applied</h2>
        <table className='min-w-full bg-white border rounded-lg'> {/* ✅ Fixed "bg-whit" typo */}
          <thead>
            <tr>
              <th className='px-4 py-3 text-left border-b'>Company</th>
              <th className='px-4 py-3 text-left border-b'>Job Title</th>
              <th className='px-4 py-3 text-left border-b max-sm:hidden'>Location</th>
              <th className='px-4 py-3 text-left border-b max-sm:hidden'>Date</th>
              <th className='px-4 py-3 text-left border-b'>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job, index) => (
              <tr key={index}>
                <td className='flex items-center gap-2 px-4 py-3 border-b'>
                  <img className='w-8 h-8' src={job.logo} alt='' />
                  {job.company}
                </td>
                <td className='px-4 py-2 border-b'>{job.title}</td>
                <td className='px-4 py-2 border-b max-sm:hidden'>{job.location}</td>
                <td className='px-4 py-2 border-b'>{moment(job.date).format('ll')}</td>
                <td className='px-4 py-2 border-b'>
              <span className={`${job.status === 'Accepted' ? 'bg-green-100' : job.status === 'Rejected' ? 'bg-red-100' : 'bg-blue-100'} px-4 py-1.5 rounded`}>
    {job.status}
  </span>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Applications;
