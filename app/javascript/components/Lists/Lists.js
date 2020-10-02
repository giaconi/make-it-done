import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios'
import List from './list'

const Lists = () => {
  const [lists, setLists] = useState([])

  useEffect (()=> {
    // Get all lists from API
    // Update lists in our state

    axios.get('api/v1/lists.json')
    .then( response => setLists(response.data.data))
    .catch( response => console.log(response))
  },
    [lists.lenght]
  )
  const list = lists.map( item => {
    return (<li key={item.attributes.title}>{item.attributes.title}</li>)
  })
  return (
     <Fragment>
     <div> This is the Lists#index view for our app.
     <ul>{list}</ul>
     </div>
     </Fragment>
  )
}

export default Lists