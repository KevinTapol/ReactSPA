import React from 'react'


const AppDemo = () => {
  const name = "John"
  const x = 10
  const y = 20
  const names = ["John", "Tom", "Petty", "George", "Lucas"]
  const loggedIn = true
  const styles = {
    color: 'red',
    fontSize: '55px'
  }

  // if (loggedIn) {
  //   return <h1>Hello Logged In Member!</h1>
  // }

  return (
    <div className='text-5xl' >
      <span style={{ color: "red", fontSize: '24px'}} >Hello {name}</span>
      <p style={styles} >The sum of {x} and {y} is {x + y}</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {/* changed loggedIn to false */}
      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
      {loggedIn ? <h1>Hello Member</h1> : ""}
      {loggedIn && <h1>Hello Member</h1>}
      
    </div>
  )
}

export default AppDemo