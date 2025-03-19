import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import Navbar from '../components/Navbar';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import kconvert from 'k-convert';
import moment from 'moment';
import JobCard from '../components/JobCard';

const Applyjob = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const { jobs } = useContext(AppContext);

  useEffect(() => {
    if (jobs.length > 0) {
      const data = jobs.find(job => job._id === id);
      if (data) {
        setJobData(data);
      }
    }
  }, [id, jobs]);

  return jobData ? (
    <div>
      <Navbar />
      <div className="container flex flex-col min-h-screen px-4 py-10 mx-auto 2xl:px-20">
        <div className="w-full text-black bg-white rounded-lg">
          <div className="flex flex-wrap justify-center gap-8 py-20 mb-6 md:justify-between px-14 bg-sky-50 border-sky-400 rounded-xl">
            <div className="flex flex-col items-center md:flex-row">
              <img
                className="h-24 p-4 mr-4 bg-white border rounded-lg max-md:mb-4"
                src={jobData?.companyId?.image}
                alt="Company Logo"
              />
              <div className="text-center md:text-left text-neutral-700">
                <h1 className="text-2xl font-medium sm:text-4xl">{jobData?.title}</h1>
                <div className="flex flex-row flex-wrap items-center gap-6 mt-2 text-gray-600 max-md:justify-center gap-y-2">
                  <span className="flex items-center gap-1">
                    <img src={assets.suitcase_icon} alt="Company Icon" />
                    {jobData?.companyId?.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.location_icon} alt="Location Icon" />
                    {jobData?.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.person_icon} alt="Person Icon" />
                    {jobData?.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.money_icon} alt="Salary Icon" />
                    CTC: {kconvert.convertTo(jobData?.salary)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start text-sm text-end max-md:mx-auto max-md:text-center">
              <button className="p-2 px-10 text-white bg-blue-600 rounded">Apply Now</button>
              <p className="mt-1 text-gray-600">Posted {moment(jobData?.date).fromNow()}</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between lg:flex-row">
            <div className="w-full lg:w-2/3">
              <h2 className="mb-4 text-2xl font-bold">Job description</h2>
              <div className="rich-text" dangerouslySetInnerHTML={{ __html: jobData?.description }}></div>
              <button className="p-2 px-10 mt-10 text-white bg-blue-600 rounded">Apply Now</button>
            </div>
            {/* Right Section - More Jobs */}
            <div className="w-full mt-8 space-y-5 lg:w-1/3 lg:mt-0 lg:ml-8">
              <h2>More jobs from {jobData?.companyId?.name}</h2>
              {jobs
                .filter(job => job.companyId?._id === jobData?.companyId?._id && job._id !== jobData?._id)
                .slice(0, 4)
                .map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Applyjob;
