import React from 'react';

const ListForm = (props) => {
  return (
    <div className="form_wrapper">
      <form onSubmit={props.handleSubmit}>
        <div>Add list</div>
        <div className="field">
          <input onChange={props.handleChange} type="text" name="title" placeholder="List title" value={props.list.title || ''}/>
        </div>
        <button type="submit"><i className="fas fa-folder-plus"></i></button>
      </form>
    </div>
  )
}
export default ListForm 