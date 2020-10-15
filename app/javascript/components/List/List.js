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

  const slug = props.match.params.slug;
  const postUrl = `/api/v1/tasks`;
  const getUrl = `/api/v1/lists/${slug}`;

  useEffect(() => {
    
    axios
      .get(getUrl)
      .then((response) => {
        // console.log(response.data.included);
        setlistName(response.data.data.attributes.title)
        setList(response.data.data.attributes)
        setTasks(response.data.included)
        setListId(response.data.data.id)
      })
      .catch((response) => console.log(response))
  }, [tasks.length]); //"here in this space it is the value for each time this value will be chamge, the whole useeffect will be triggered"

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
      setTasks(tasks.splice(index, 1, todo))
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
        {tasks.map((task) => {
          return (
              <div className={`${task.attributes.done ? "done" : "undone"}`} key={task.id}>
              <div className="notification">
                <img src={`https://avatar.oxro.io/avatar.svg?name=${task.attributes.duration}&background=545454&color=fffffa`}/>
                <div className="notification-content">
                  <p><small>{task.attributes.created_at}</small></p>
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