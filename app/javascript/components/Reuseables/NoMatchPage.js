import React, { Fragment } from 'react';
import ErrorImg from '../../../assets/images/404.png'

const NoMatchFound = () => {

  return (
    <Fragment>
      <div className="text-center mt-4">
        <img
          src={ErrorImg}
          sizes="(max-width: 600px) 100vw, 600px"
          alt=""
        />
      </div>
    </Fragment>
  )
}

export default NoMatchFound;