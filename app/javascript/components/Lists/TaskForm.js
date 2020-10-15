import React from 'react';

const TaskForm = (props) => {
  return (
      <form className="form-row mt-3 mb-5" onSubmit={props.handleSubmit}>
        <div className="form-group col-md-2">
          <input className="form-control" onChange={props.handleChange} value={props.task.duration || ''} type="number" name="duration" placeholder="duration"/>
        </div>
        <div className="form-group col-md-9">
          <input className="form-control" onChange={props.handleChange} value={props.task.description || ''} type="text" name="description" placeholder="description"/>
        </div>
        <div className="form-group col-md-1">
        <button className="btn btn-warning" type="submit"><i className="fas fa-plus text-xl"></i></button>
        </div>
      </form>
  )
}

export default TaskForm