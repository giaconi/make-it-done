import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Link } from  'react-router-dom'
import axios from 'axios';
import TaskForm from'../Lists/TaskForm'

const List = (props) => {
  const [listName, setlistName] = useState('');
  const [list, setList] = useState({});
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState([]);
  const [list_id, setListId] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);

  // useEffect
  // set one state in data(tasks) and then get from one source only and check the state only on that source - data, in this case fetch only tasks
  const [data, setData] = useState()
 
  const slug = props.match.params.slug;
  const postUrl = `/api/v1/tasks`;
  const getUrl = `/api/v1/lists/${slug}`;

  useEffect(() => {
    
    axios
      .get(getUrl)
      .then((response) => {
        console.log(response.data);
        setlistName(response.data.data.attributes.title)
        setList(response.data.data.attributes)
        setTasks(response.data.included)
        setListId(response.data.data.id)
      })
      .catch((response) => console.log(response))
  }, []);
// empty [] so it can run only once

  const handleChange = (e) => {
    // console.log('name:', e.target.name, 'value:', e.target.value)
    setTask(Object.assign({}, task, {[e.target.name]: e.target.value, list_id}))
    // console.log('task:', task, list_id)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(postUrl, {
      task,
      list_id
    })
    .then(response => {
      // console.log('response after insert new task', response);
      const taskItem = response.data.data.attributes;
      setTasks([...tasks, {attributes: taskItem}]); 
      // console.log(task)
      setTask({description: '', duration: ''})
      console.log('set state:', tasks)
    })
    .catch(response => {
      console.log(response);
    });
  };
  console.log('check state outside useEffect', tasks)

// mark article as read comparison in edge
  const handleComplete = (e) => {

    axios.put(`/api/v1/tasks/${e}`, {
     id: e,
     done: true
   })
    .then(response => {
      console.log('response after update', response.data.data.attributes)
      // assign response to a variable
      let todo = response.data.data.attributes;

      // find and assign here the item from response in the initial state
      const index = tasks.find(element => element.id === e);
      console.log('the found index:', index)
      console.log('tasks before splice:', tasks)

      // replace the found item with the updated item from response
      let updatedTasks = tasks.splice(index, 1, todo)
      setTasks(updatedTasks)
      console.log('tasks after splice:', tasks)
    })
    .catch(response => {
      console.log(response);
    });
  }

  return (
    <div className="container">
      <Link to={'/lists'} className="float-left">
        <p className="text-yellow-500"><i className="fas fa-arrow-left"></i></p>
      </Link>
      <div className="flex justify-content-center text-center">
        <p className="uppercase text-3xl text-gray-500 border-b border-yellow-300 py-2">{listName}</p>
      </div>
      <div className="container">
        <TaskForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          attributes={list}
          task={task}
        />
        </div>
          ** // check for a run if list is empty no map - called short-circutry
          {tasks.length && tasks.map((task) => {
            return (
                <div className={`task ${task.attributes.done ? "done" : "undone"}`} key={task.id}>
                <div className="notification">
                  <div className="duration rounded-full h-16 w-16 items-center bg-gray-400">
                    <h5>{task.attributes.duration}</h5>
                    <p>minutes</p>
                  </div>
                  <div className="notification-content text-center">
                    <p>{task.attributes.description}</p>
                  </div>
                  <div className="notification-actions">
                    <button onClick={() => handleComplete(task.id)}><i className="fas fa-check"></i></button>
                  </div>
                </div> 
                </div>          
            );})}
        </div>
  );
}

export default List