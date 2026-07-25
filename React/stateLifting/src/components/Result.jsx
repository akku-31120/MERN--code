import React from 'react'

const Result = ({query}) => {

    const users = ["Aman","Riya","akanshi","gungun","pankaj","priya"]
    const filtered = users.filter(u => u.toLowerCase().includes(query.toLowerCase()))
  return (
    <div>
      <ul>
        {
            filtered.map(u => <li key ={u}>{u}</li>)
        }
      </ul>
    </div>
  )
}

export default Result
