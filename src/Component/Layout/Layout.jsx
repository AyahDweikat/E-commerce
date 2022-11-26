import React, { useEffect, useRef, useState } from 'react';


import {Modal} from "bootstrap";
import { Outlet } from 'react-router-dom';
import { GlobalContext } from '../../Utils/Context';
import Navbar from '../Navbar/Navbar';
import CustomModal from './../CustomModal/CustomModal';




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
  return (
    <div>
        <GlobalContext.Provider value ={{showModal}}>
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