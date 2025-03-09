import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: '',
    });

    const [isSearched, setIsSearched] = useState(false);

    const [jobs, setJobs] = useState([]);

    const[showRecruiterLogin, setShowRecruiterLogin] = useState(false)

    // function to fetch jobs data
    const fetchJobs = async () => {
        setJobs(jobsData);
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const value = {
        searchFilter, 
        setSearchFilter, 
        isSearched, 
        setIsSearched,
        jobs,
        setJobs,
        showRecruiterLogin , setShowRecruiterLogin
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

// Add PropTypes validation
AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate children prop
};

