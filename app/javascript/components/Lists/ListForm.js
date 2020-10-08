import React from 'react';

const ListForm = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg items-center bg-gray-200 px-6 pt-4 pb-2 m-8">
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