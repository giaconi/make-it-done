// component that represents the individual grid item -
// e.g. defining what elements each list item will contain
// with which I'll create the grid items later

import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const List = (props) => {

  return (
    <Link to={"/lists/" + props.attributes.slug}>
      <div className="card">
        <div className="list_title">
          {props.attributes.title}
        </div>
        <div className="last_added">
          Latest task added at 12:30, on 12/09
        </div>
        <div className="total_tasks">
          You have completed 15 out of 22 total tasks.
        </div>
        <div className="list_title">
          Total required time to complete all: 108 min.
        </div>
        <div className="link">
        </div>
      </div>
    </Link>
  )
}

export default List