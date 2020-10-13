import React from 'react';

const TaskForm = (props) => {
  return (
    <div className="container">
      <form className="form-row mt-3 mb-5" onSubmit={props.handleSubmit}>
        <div className="form-group col-md-3">
          <input className="form-control" onChange={props.handleChange} value={props.task.duration || ''} type="number" name="duration" placeholder="How long should take?"/>
        </div>
        <div className="form-group col-md-9">
          <input className="form-control" onChange={props.handleChange} value={props.task.description || ''} type="text" name="description" placeholder="Task description"/>
        </div>
          <button className="btn btn-warning float-right" type="submit">Add task</button>
      </form>
    </div>
  )
}

export default TaskForm