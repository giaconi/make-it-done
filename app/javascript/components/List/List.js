import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Link } from  'react-router-dom'
import axios from 'axios';
import TaskForm from'../Lists/TaskForm'

const List = (props) => {
  const [listName, setlistName] = useState('');
  const [list, setList] = useState({});
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [list_id, setListId] = useState('');

  const slug = props.match.params.slug;
  const postUrl = `/api/v1/tasks`;
  const getUrl = `/api/v1/lists/${slug}`;

  useEffect(() => {
    
    axios
      .get(getUrl)
      .then((response) => {
        // console.log(response.data.included);
        setlistName(response.data.data.attributes.title);
        setList(response.data.data.attributes);
        setTasks(response.data.included);
        setListId(response.data.data.id);
      })
      .catch((response) => console.log(response));
    }, []);

    
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
      // console.log(response.data.data.attributes);
      const taskItem = response.data.data.attributes;
      setTasks([...tasks, {attributes: taskItem}]); 
      // console.log(task)
      setTask({description: '', duration: ''})
    })
    .catch(response => {
      console.log(response);
    });
  };

  return (
    <div className="container">
      <Link to={'/lists'}>
        <div className="navigation"><i className="fas fa-backspace"></i></div>
      </Link>
      <div className="list_name">{listName}</div>
        <TaskForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          attributes={list}
          task={task}
        />
        {tasks.map((card, i) => {
          return (
              <div className="notification" key={i}>
                <img src={`https://avatar.oxro.io/avatar.svg?name=${card.attributes.duration}&background=545454&color=fffffa`}/>
                <div className="notification-content">
                  <p><small>{card.attributes.created_at}</small></p>
                  <p>{card.attributes.description}</p>
                </div>
                <div className="notification-actions">
                  <button><i className="fas fa-check"></i></button>
                </div>
              </div>          
        );})}
    </div>
  );
}

export default List