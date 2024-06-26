import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter(
  // createRoutesFromElements(<Route path='/about' element={<h1>Testing Route</h1>} />)
  createRoutesFromElements(
    <Route path='/' element={ <MainLayout /> } >
      <Route index element={ <Homepage /> } />
    </Route>
  )
)

// if you want a url /about you need to use path='/about' 
// if you want to use a page then you need to use index=
const AppDemo2 = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppDemo2

/* 
Below is the typical App.jsx setup
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  )
}

export default App
*/