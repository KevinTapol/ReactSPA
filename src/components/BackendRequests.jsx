import React from 'react'

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

  const deleteJob = async (id) => {
    // console.log('delete', id)
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    })
    return
}

const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
}


const BackendRequests = () => {
  return (
    <div>BackendRequests</div>
  )
}

export { BackendRequests as default, addJob, deleteJob, updateJob };