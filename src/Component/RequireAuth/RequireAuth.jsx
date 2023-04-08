import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { GlobalContext } from './../../Utils/Context';

function RequireAuth(props) {
    const auth = useContext(GlobalContext).auth;
    // useEffect(()=>{

    // })
    // const navigate = useNavigate()
  return (
    <div>
        {auth.user?
        props.children
        :
        <Navigate to="/login"/>}
    </div>
  )
}

export default RequireAuth