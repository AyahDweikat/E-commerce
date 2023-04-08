import React, {useState} from 'react'
import { GlobalContext } from '../../Utils/Context';
import { useContext } from 'react';
import { useLocation, useNavigate, useRouteLoaderData } from 'react-router-dom';

function Login() {
    const [user, setUserData] = useState({name:'', token:''})
    const [userName, setUserName] =  useState("")
    const [password, setPassword] =  useState("")
    const [isWaiting, setIsWaiting] =  useState(false);
    
    // const [flag, setFlag] = useState(false);
    const auth = useContext(GlobalContext).auth;

    const navigate = useNavigate();

    async function onFormSubmit(e){
        setIsWaiting(true);
        e.preventDefault();
        const resp = await auth.signin(userName, password);
        
        if(resp.status === 200){
            setIsWaiting(false);
            let obj={}
            obj.name= resp.user.name;
            obj.token= resp.token;
            setUserData(obj);
            navigate('/');
        } else{
            alert('username or password is wrong !');
            setIsWaiting(false);
        }
    }
    // function checkLogin(){
    //     if(userName === user.name ){
    //         navigate('/');
    //     } else {
    //         navigate('./login');
    //     }
    // }
  return (
    <div className='container mt-4'>
        <form action="" onSubmit={onFormSubmit}>
            <div>
                <label htmlFor="userNmae" className='form-label' >Username</label>
                <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}} id="usrname" className='form-control'/>
            </div>
            <div>
                <label htmlFor="password" className='form-label' >password</label>
                <input type="password" value={password} id="password" onChange={(e)=>{setPassword(e.target.value)}} className='form-control' />
            </div>
            <button className='mt-3 btn btn-primary' disabled={isWaiting} type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login;