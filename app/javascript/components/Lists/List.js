// component that represents the individual grid item -
// e.g. defining what elements each list item will contain
// with which I'll create the grid items later

import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const List = (props) => {

  return (
    <Link to={"/lists/" + props.attributes.slug} className="text-decoration-none">
      <div className="card text-white bg-dark mb-3" style={{float : 'max-width: 18rem'}}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Dark card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </Link>
  )
}

export default List