// component that represents the individual grid item -
// e.g. defining what elements each list item will contain
// with which I'll create the grid items later

import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const List = (props) => {
  console.log(props);
  console.log(props.attributes.relationships.tasks);

  let countTaskNumber = Object.keys(props.attributes.relationships.tasks.data).length;

  return (
    <Link to={"/lists/" + props.attributes.attributes.slug} className="text-decoration-none">
      <div className="card card-shadow text-white bg-dark mb-3" style={{float : 'max-width: 18rem'}}>
        <div className="card-header">
          <h5>{props.attributes.attributes.title}</h5>
        </div>
        <div className="card-body">
          <p className="card-title"> <strong className="text-yellow-300">{countTaskNumber}</strong> tasks inside</p>
          <p className="card-text">last added: <strong>[add value]</strong></p>
        </div>
      </div>
    </Link>
  )
}

export default List