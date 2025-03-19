import React from 'react';
import { manageJobsData } from '../assets/assets';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const ManageJobs = () => {
  const navigate = useNavigate();

  return (
    <div className="container max-w-5xl p-4">
      <div className="overflow-x-auto">
        <table className="max-w-4xl min-w-full bg-white border border-gray-200 max-sm:text-sm">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left border-b max-sm:hidden">#</th>
              <th className="px-4 py-2 text-left border-b">Job Title</th>
              <th className="px-4 py-2 text-left border-b max-sm:hidden">Date</th>
              <th className="px-4 py-2 text-left border-b max-sm:hidden">Location</th>
              <th className="px-4 py-2 text-center border-b">Applicants</th>
              <th className="px-4 py-2 text-left border-b">Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr key={index} className="text-gray-700">
                <td className="px-4 py-2 border-b max-sm:hidden">{index + 1}</td>
                <td className="px-4 py-2 border-b">{job.title}</td>
                <td className="px-4 py-2 border-b max-sm:hidden">{moment(job.date).format('LL')}</td>
                <td className="px-4 py-2 border-b max-sm:hidden">{job.location}</td>
                <td className="px-4 py-2 text-center border-b">{job.applicants}</td>
                <td className="px-4 py-2 border-b">
                  <input className="ml-4 scale-125" type="checkbox" defaultChecked={job.isVisible} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <button onClick={() => navigate('/dashboard/add-job')} className="px-2 py-2 text-white bg-black rounded">
          Add new job
        </button>
      </div>
    </div>
  );
};

export default ManageJobs;
