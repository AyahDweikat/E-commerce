import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import CustomModal from "./Component/CustomModal/CustomModal";
import Navbar from "./Component/Navbar/Navbar";
// import Products from "./Pages/Products/Products";
import "./Styles/mixins.scss";
import { GlobalContext } from "./Utils/Context";
import {Modal} from "bootstrap";
// import './App.css';
import React from 'react';
import ProductsFun from "./Pages/Products/ProductsFun";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      modalData:{
        body:"",
        title:"",
        footer:""
      }
    }
  }
  componentDidMount(){
    this.modal = new Modal("#customModal");
  }
  showModal = (options)=>{
    this.setState({
      modalData:{
        title: options.title,
        body: options.body,
        footer: options.footer
      }
    }, ()=>{
      this.modal.show();
    })
  }
  render(){
    return (
      <GlobalContext.Provider value ={{showModal: this.showModal}}>
        <div className="App">
          <CustomModal
          title={this.state?.modalData?.title}
          body={this.state?.modalData?.body}
          footer={this.state?.modalData?.footer} />
          <Navbar />
          {/* <Products /> */}
          <ProductsFun/>
        </div>
      </GlobalContext.Provider>
    );
  }
  
  
}

export default App;
