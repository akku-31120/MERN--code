import React from 'react'
import { useState } from 'react'
import SearchBox from './SearchBox'
import Result from './Result'

const SearchApp = () => {

  const[query,setQuery] = useState("")

  return (
    <div>
      <SearchBox setQuery={setQuery}/>
      {/* <h2>{query}: is the current query</h2> */}
       <Result query ={query}/>
    </div>
  )
}

export default SearchApp
