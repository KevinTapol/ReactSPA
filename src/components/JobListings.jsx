import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';
// Initially the project used a single front end file of jobs.json but then switched to json-server mock REST API. Time stamp 1:43:20 https://www.youtube.com/watch?v=LDB4uaJ87e0&t=840s&ab_channel=TraversyMedia
// import jobs from '../jobs.json'

const JobListings = ({ isHome = false }) => {
  // Since we are now using json-server for jobs.json, the have to switch to useState hooks.
  // console.log(jobs)
  // const JobListings = isHome ? jobs.slice(0,3) : jobs;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Data fetching using useEffect() which is a fetch on render vs React suspense which allows a render while fetching with a fall back ui like a spinner. React Query 3rd party library etc. React 19 has the new hook to fetch data using useHook().
  // this allows our component to use side effect of grabbing our state
  // useEffect( function, dependency array) 
  useEffect(() => {
    const fetchJobs = async () => {
      // Adding ?_limit= lets you slice the json data to a determined limit. In this case, we are limiting to 3 objects.
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';

      /*
      This entire block is being changed in vite.config.js by creating a proxy where 'http://localhost:8000' is being replaced with '/api'.
      try {
        const res = await fetch('http://localhost:8000/jobs');
        const data = await res.json();
        setJobs(data)
      }
      */
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        // Using finally means if the try catch succeeds or fails, we can set setLoading to false.
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default JobListings;