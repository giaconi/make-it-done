import React from 'react';

const ListForm = (props) => {
  return (
    <div className="w-full max-w-sm">
      <form onSubmit={props.handleSubmit} className="flex items-center border-b border-yellow-300 py-2">
        <input onChange={props.handleChange} type="text" name="title" placeholder="What tasks you'll have in this list?" value={props.list.title || ''} className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"/>
        <button type="submit" className="flex-shrink-0 text-2xl text-yellow-300 hover:text-yellow-500">
        <i className="fas fa-folder-plus"></i>
        </button>
      </form>
    </div>
  )
}
export default ListForm