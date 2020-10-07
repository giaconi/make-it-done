import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios'
import List from './List'

const Lists = () => {
  const [lists, setLists] = useState([])

  useEffect (()=> {
    // Get all lists from API
    // Update lists in the state

    axios.get('api/v1/lists.json')
    .then( response => {
      setLists(response.data.data)
    })
    .catch( response => {
      console.log(response)
    })
  },
    [lists.length]
  )

  const grid = lists.map( item => {
    return (
      <List 
        key={item.attributes.title}
        attributes={item.attributes}
      />
    )
  })

  return (
    <div className="home">
      <div className="grid">{grid}</div>
    </div>
  )
}

export default Lists