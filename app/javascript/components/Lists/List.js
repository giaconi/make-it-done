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
      <div className="card text-white bg-dark mb-3" style={{float : 'max-width: 18rem'}}>
        <div className="card-header">{props.attributes.title}</div>
        <div className="card-body">
          <h5 className="card-title">You have {22} tasks in this list.</h5>
          <p className="card-text">last added: yesterday</p>
        </div>
      </div>
    </Link>
  )
}

export default List