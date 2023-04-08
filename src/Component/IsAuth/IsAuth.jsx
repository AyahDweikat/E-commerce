import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { GlobalContext } from './../../Utils/Context';

function IsAuth(props) {
  const locate = useLocation().state;
  const auth = useContext(GlobalContext).auth;
    // useEffect(()=>{

    // })
    // const navigate = useNavigate()
  return (
    <div>
        {auth.user?
        <Navigate to={locate}/>:
        props.children}
    </div>
  )
}

export default IsAuth