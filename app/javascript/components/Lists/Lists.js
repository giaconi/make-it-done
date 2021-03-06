import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios'
import List from './List'
import ListForm from './ListForm'

const Lists = (props) => {
  const [lists, setLists] = useState([])
  const [list, setList] = useState({})
  const [user_id, setUserId] = useState('');
  

  const slug = props.match.params.slug;
  const url = `/api/v1/lists`;

  useEffect (()=> {

    axios.get(url)
    .then( response => {
      // console.log(response.data.data[0].attributes.user_id)
      setLists(response.data.data);
      setUserId(response.data.data[0].attributes.user_id);
      // console.log(response.data.data.attributes.user_id);
    })
    .catch( response => {
      console.log(response)
    })
  },[]);

  const handleChange = (e) => {
    console.log('name:', e.target.name, 'value:', e.target.value)
    setList(Object.assign({}, list, {[e.target.name]: e.target.value, user_id}))
    console.log(list)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(url, {list})
    .then(response => {
      // console.log(response.data.data.attributes);
      const listItem = response.data.data.attributes;
      setLists([...lists, {attributes: listItem}]);
      setList({title: ''});
    })
    .catch(response => {
      console.log(response);
    });
  }

  const grid = lists.map( item => {
    return (
      <List 
        key={item.attributes.title}
        attributes={item.attributes}
      />
    )
  });

  return (
    <div className="container">
      <div className="row justify-content-center mb-4">
        <ListForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          list={list}
        />
      </div>
      <div className="mt-3 card-columns">
        
         {grid}

      </div>
    </div>
  )
}
export default Lists