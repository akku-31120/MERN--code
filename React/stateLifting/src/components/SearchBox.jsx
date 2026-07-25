import React from 'react'

const SearchBox = ({setQuery}) => {
  return (
    <div>
      <input placeholder='search user' onChange={(e)=>setQuery(e.target.value)}></input>
      </div>
  )
}

export default SearchBox
// here searchBox and results component are in sync.