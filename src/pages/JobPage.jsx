// to access the data loader function, we must import it from react-router-dom
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { useState, useEffect } from 'react';
// import Spinner from '../components/Spinner';

// In the video, Brad has this jobLoader function at the end and outside of the JobPage component, but I prefer to have it at the top because it is taking the place of the useEffect() hook. React hooks are supposed to be at the top level and inside of the component shown below.
// Global state data loader being passed into other components.
// This data loader (a feature from react-router) is taking the place of useEffect() which is fetching data on render.
const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

const JobPage = ({ deleteJob }) => {

    /*
    This useState() and useEffect() fetch on render is being replaced by the async data loader function called dataLoader outside of this JobPage function and at the bottom.
    // useParams hook for specific dynamic job id
    const { id } = useParams()
    // useState hook for dynamic job
    const [job, setJob] = useState(null)
    // useState hook for loading state
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJob = async () => {
            try {
                // using /api instead of http://localhost:8000
                // We also need the specific id that the user is requesting and we get that by using the useParams() hook from react-router-dom.
                const res = await fetch(`/api/jobs/${id}`)
                const data = await res.json()
                setJob(data)
            } catch (error) {
                console.log('Error fetching data', error)
            } finally {
                setLoading(false)
            }
        }
        // calling the function fetchJobs
        fetchJob()
    }, [])
    */
  const navigate = useNavigate();
  const { id } = useParams();
    // useLoaderData hook being used to grab the dynamic job id to eventually fetch the data 
  const job = useLoaderData();

  // onClick function being called on the delete button with a confirmation window
  const onDeleteClick = (jobId) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this listing?'
    );

    if (!confirm) return;
    // else delete the job 
    deleteJob(jobId);
    // pop up job deleted
    toast.success('Job deleted successfully');
    // redirect to the jobs page
    navigate('/jobs');
  };

  return (
    /*
    // testing if the useState hook of loading is true then display the Spinner Component else display the dynamic job title.
    loading ? <Spinner /> : ( <h1>{ job.title }</h1> )
    */
    <>
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/jobs'
            className='text-indigo-500 hover:text-indigo-600 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className='bg-indigo-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main>
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <div className='text-gray-500 mb-4'>{job.type}</div>
                <h1 className='text-3xl font-bold mb-4'>{job.title}</h1>
                <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
                  <FaMapMarker className='text-orange-700 mr-1' />
                  <p className='text-orange-700'>{job.location}</p>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-indigo-800 text-lg font-bold mb-6'>
                  Job Description
                </h3>

                <p className='mb-4'>{job.description}</p>

                <h3 className='text-indigo-800 text-lg font-bold mb-2'>
                  Salary
                </h3>

                <p className='mb-4'>{job.salary} / Year</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold mb-6'>Company Info</h3>

                <h2 className='text-2xl'>{job.company.name}</h2>

                <p className='my-2'>{job.company.description}</p>

                <hr className='my-4' />

                <h3 className='text-xl'>Contact Email:</h3>

                <p className='my-2 bg-indigo-100 p-2 font-bold'>
                  {job.company.contactEmail}
                </p>

                <h3 className='text-xl'>Contact Phone:</h3>

                <p className='my-2 bg-indigo-100 p-2 font-bold'>
                  {' '}
                  {job.company.contactPhone}
                </p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-xl font-bold mb-6'>Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
// export default JobPage
// Here we are exporting Jobpage ad default but also exporting the function jobLoader which allows us to also import jobLoader into other components.
export { JobPage as default, jobLoader };