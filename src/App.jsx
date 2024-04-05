import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter(
  // createRoutesFromElements(<Route path='/about' element={<h1>Testing Route</h1>} />)
  createRoutesFromElements(
    <Route path='/' element={ <MainLayout /> } >
      <Route index element={ <Homepage /> } />
      <Route path='/jobs' element={ <JobsPage /> } />
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