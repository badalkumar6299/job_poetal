import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);
  const [showFilter, setFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleLocationChange = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location) ? prev.filter((c) => c !== location) : [...prev, location]
    );
  };

  useEffect(() => {
    const matchesCategory = (job) => selectedCategories.length === 0 || selectedCategories.includes(job.category);
    const matchesLocation = (job) => selectedLocations.length === 0 || selectedLocations.includes(job.location);
    const matchesTitles = (job) => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
    const matchesSearchLocation = (job) => searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

    const newFilteredJobs = jobs
      .slice()
      .reverse()
      .filter((job) => matchesCategory(job) && matchesLocation(job) && matchesTitles(job) && matchesSearchLocation(job));

    setFilteredJobs(newFilteredJobs);
    setCurrentPage(1);
  }, [jobs, selectedCategories, selectedLocations, searchFilter]);

  const jobsPerPage = 6;
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="container flex flex-col py-8 mx-auto 2xl:px-20 lg:flex-row max-lg:space-y-8">
      {/* Sidebar */}
      <div className="w-full px-4 bg-white lg:w-1/4">
        {/* Search Filter From Hero Component */}
        {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
          <div>
            <h3 className="mb-4 text-lg font-medium">Current Search</h3>
            <div className="mb-4 text-gray-600">
              {searchFilter.title && (
                <span className="ml-2 inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
                  {searchFilter.title}
                  <img
                    onClick={() => setSearchFilter((prev) => ({ ...prev, title: "" }))}
                    className="cursor-pointer"
                    src={assets.cross_icon}
                    alt="Remove title filter"
                  />
                </span>
              )}
              {searchFilter.location && (
                <span className="ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded">
                  {searchFilter.location}
                  <img
                    onClick={() => setSearchFilter((prev) => ({ ...prev, location: "" }))}
                    className="cursor-pointer"
                    src={assets.cross_icon}
                    alt="Remove location filter"
                  />
                </span>
              )}
            </div>
          </div>
        )}

        <button onClick={() => setFilter((prev) => !prev)} className="px-6 py-1.5 rounded border border-gray-400 lg:hidden">
          {showFilter ? "Close" : "Filter"}
        </button>

        {/* Category Filter */}
        <div className={`max-lg:${showFilter ? "block" : "hidden"}`}>
          <h4 className="py-4 text-lg font-medium">Search by Categories</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category, index) => (
              <li className="flex items-center gap-3" key={index}>
                <input
                  className="scale-100"
                  type="checkbox"
                  onChange={() => handleCategoryChange(category)}
                  checked={selectedCategories.includes(category)}
                />
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Location Filter */}
        <div className={`max-lg:${showFilter ? "block" : "hidden"}`}>
          <h4 className="py-4 text-lg font-medium pt-14">Search by Locations</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, index) => (
              <li key={index}>
                <input
                  className="scale-100"
                  type="checkbox"
                  onChange={() => handleLocationChange(location)}
                  checked={selectedLocations.includes(location)}
                />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Listings */}
      <section className="w-full text-gray-800 lg:w-3/4 max-lg:px-4">
        <h3 className="py-2 text-3xl font-medium" id="job-list">
          Latest Jobs
        </h3>
        <p className="mb-8">Get your desired job from top companies</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage).map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        {/* Pagination */}
        {filteredJobs.length > 0 && (
          <div className="flex items-center justify-center mt-10 space-x-2">
            {/* Left Arrow */}
            <a
              key={0} // Added key here
              href="#job-list"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
              }}
            >
              <img
                src={assets.left_arrow_icon}
                alt="Previous Page"
                className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
              />
            </a>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <a key={pageIndex} href="#job-list">
                <button
                  onClick={() => setCurrentPage(pageIndex + 1)}
                  className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded 
                    ${currentPage === pageIndex + 1 ? "bg-blue-500 text-white" : "bg-gray-500 text-white"}`}
                >
                  {pageIndex + 1}
                </button>
              </a>
            ))}

            {/* Right Arrow */}
            <a
              href="#job-list"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((prev) => (prev < totalPages ? prev + 1 : totalPages));
              }}
            >
              <img
                src={assets.right_arrow_icon}
                alt="Next Page"
                className={currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
              />
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobListing;
