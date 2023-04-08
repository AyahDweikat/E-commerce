import React, { useEffect, useRef, useState } from 'react';


import {Modal} from "bootstrap";
import { Outlet } from 'react-router-dom';
import { GlobalContext } from '../../Utils/Context';
import Navbar from '../Navbar/Navbar';
import CustomModal from './../CustomModal/CustomModal';
import { FakeLoginApi } from '../../Utils/ApiUtils';




function Layout() {
    const [modalData, setModalData] = useState({
        body:"",
        title:"",
        footer:""
    })
    const modal = useRef()
    useEffect(()=>{
        modal.current = new Modal('#customModal');
    },[])
    const showModal = (options) =>{
        setModalData({
            title: options.title,
            body: options.body,
            footer: options.footer
        })
        modal.current.show();
    }
    const [user, setUser] =  useState('');
    const [token, setToken] =  useState('');
    const auth ={
      user, 
      token, 
      signin: async (username, password) => {
        const resp = await FakeLoginApi(username, password);
        if (resp.status === 200) {
            setUser(resp.user);
            setToken(resp.token);
          }
          return resp;
        },
        signout:()=>{
          setUser('');
          setToken('');
        }
      }
    
  return (
    <div>
        <GlobalContext.Provider value ={{showModal, auth}}>
        <div className="App">
          <CustomModal
          title={modalData?.title}
          body={modalData?.body}
          footer={modalData?.footer} />
          <Navbar />
          <Outlet/>
        </div>
      </GlobalContext.Provider>
    </div>
  )
}

export default Layout