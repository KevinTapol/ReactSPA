import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
// Here we are importing both the JobPage.jsx as default and the data loader function jobLoader from JobPage.jsx being passed in as a prop inside the Route component rendered element prop of loader. We can use the jobLoader to pass into other components to get the dynamic job by id.
import JobPage, { jobLoader } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'

// if you want a url /about you need to use path='/about' 
// if you want to use a page then you need to use index=
const App = () => {

  // Here Brad is showing the backend functions of json-server that is being used to change the front-end json file. Instead, we would use MongoDB or Supabase.
  // request function in the app component but why?
  // I think that the reason Brad is putting the request CRUD functions in the App.jsx is to demonstrate passing in a function as a prop into a component that has a destructured prop.
  // AddJobPage.jsx contains the component where this request function is being passed in as a prop.
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    // When we return from this function we get the redirect from AddJobPage.jsx form function onSubmit called submitForm.
    return
  }

  // JobPage.jsx contains the component where this request function is being passed in as a prop. You can put the toast notification here but instead we will put it in the JobPage.jsx that contains the destructured prop. Headers and body not needed because we are only deleting data.
  const deleteJob = async (id) => {
    // console.log('delete', id)
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    })
    return
  }
  
  // I first thought I needed id or job.id instead of job being passed into the async function. The reason it needs to be job, is because the useDataLoader() hook is being assigned as job. So, when we call job, the useDataLoader() calls the specific job and populates the fields by the id.
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
  }

  const router = createBrowserRouter(
    // createRoutesFromElements(<Route path='/about' element={<h1>Testing Route</h1>} />)
    createRoutesFromElements(
      <Route path='/' element={ <MainLayout /> } >
        <Route index element={ <Homepage /> } />
        <Route path='/jobs' element={ <JobsPage /> } />
        {/* calling the function addJob through the prop of addJobSubmit in the AddJobPage component */}
        <Route path='/add-job' element={ <AddJobPage addJobSubmit={addJob} /> } />
        <Route path='/edit-job/:id' element={ <EditJobPage updateJobSubmit={updateJob} /> } loader={jobLoader} />
        {/* :id represents dynamic id of current Job being passed in as the variable id being targeted on event */}
        <Route path='/jobs/:id' element={ <JobPage deleteJob={deleteJob} /> } loader={jobLoader} />
        {/* path="*" means any route not defined will route to the given element which in this case is NotFoundPage component. */}
        <Route path='*' element={ <NotFoundPage /> } />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App