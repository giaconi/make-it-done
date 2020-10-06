import React from 'react';

const TaskForm = (props) => {
  return (
    <div className="form_wrapper">
      <form onSubmit={props.handleSubmit}>
        <div>Add a task to this list</div>
        <div className="field">
          <input onChange={props.handleChange} value={props.task.description} type="text" name="description" placeholder="Task description"/>
        </div>
        <div className="field">
          <input onChange={props.handleChange} value={props.task.duration} type="number" name="duration" placeholder="How long should take to complete?"/>
        </div>
        <span><button type="submit">Add task</button>  ||  <button type="reset">Reset form</button></span>
      </form>
    </div>
  )
}

export default TaskForm