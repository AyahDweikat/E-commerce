import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import './PageNotFound.scss';

function PageNotFound() {
    const errRoute = useRouteError();
    console.log(errRoute); 
  return (
    <div className='page-not-found'>
        <div className='wrapper'>
            <div className='text-title'>
                {errRoute.status ===404 ? errRoute.status + " " + errRoute.statusText:
                <span>Sorry, something went wrong</span> }
            </div>
            <Link className='text-body btn btn-light' to="/">Return to home page</Link>
        </div>
        
    </div>
  )
}

export default PageNotFound