import React, { useState, useEffect, Link } from 'react';
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

  return (
    <div>
      
        <p>Homepage and the dashboard. View for lists containing tasks.</p>
          {lists.map((card) => {
            const url = `/lists/${card.attributes.slug}`;
            return (
                <h3 className='card'>{card.attributes.title}</h3>
            )
          })
          }
      
     </div>
  )
}

export default Lists