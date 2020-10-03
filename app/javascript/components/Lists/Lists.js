import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios'
import List from '../List/List'

const Lists = () => {
  const [lists, setLists] = useState([])

  useEffect (()=> {
    // Get all lists from API
    // Update lists in our state

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
  const list = lists.map( item => {
    return (
      <List
        key={item.attributes.title}
        attributes={item.attributes}
      />
    )
  })
  return (
     <Fragment>
     <div> Homepage and the dashboard. View for lists.
      {list}
     </div>
     </Fragment>
  )
}

export default Lists