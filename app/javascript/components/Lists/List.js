// component that represents the individual grid item -
// e.g. defining what elements each list item will contain
// with which I'll create the grid items later

import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const List = (props) => {
  // const taskNumber = props.included;
  // console.log(taskNumber);
  // let countTaskNumber = Object.keys(taskNumber).length;

  return (
    <Link to={"/lists/" + props.attributes.slug} className="text-decoration-none">
      <div className="card card-shadow text-white bg-dark mb-3" style={{float : 'max-width: 14rem'}}>
        <div className="card-header text-center">
          <h5>{props.attributes.title}</h5>
        </div>
        <div className="card-body">
          <p className="card-title text-right text-gray-200"> <strong className="text-yellow-300">[add value]</strong> tasks inside</p>
          <p className="card-text text-gray-400">last added: <strong>[add value]</strong></p>
        </div>
      </div>
    </Link>
  )
}

export default List