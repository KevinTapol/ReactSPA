import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
// Here we are importing both the JobPage.jsx as default and the data loader function jobLoader from JobPage.jsx being passed in as a prop inside the Route component rendered element prop of loader. We can use the jobLoader to pass into other components to get the dynamic job by id.
import JobPage, { jobLoader } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'

const router = createBrowserRouter(
  // createRoutesFromElements(<Route path='/about' element={<h1>Testing Route</h1>} />)
  createRoutesFromElements(
    <Route path='/' element={ <MainLayout /> } >
      <Route index element={ <Homepage /> } />
      <Route path='/jobs' element={ <JobsPage /> } />
      <Route path='/add-job' element={ <AddJobPage /> } />
      {/* :id represents dynamic id of current Job being passed in as the variable id being targeted on event */}
      <Route path='/jobs/:id' element={ <JobPage /> } loader={jobLoader} />
      {/* path="*" means any route not defined will route to the given element which in this case is NotFoundPage component. */}
      <Route path='*' element={ <NotFoundPage /> } />
    </Route>
  )
)

// if you want a url /about you need to use path='/about' 
// if you want to use a page then you need to use index=
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App