import { tab } from '@testing-library/user-event/dist/tab';
import React, { Component } from 'react'
import {navStruct} from './utils'
export default class Navbar extends Component {
  constructor(props){
    super(props)
    this.state={
      navStructState: navStruct
    }
  }
  onTabbedClicked(tabIdx){
    // let _navStructState = [...this.state.navStructState]
    let _navStructState = JSON.parse(JSON.stringify(this.state.navStructState));
    _navStructState = _navStructState.map((tab, idx)=>{
      // tab.isActive= (idx ===tabIdx)
      // if(idx === tabIdx) {
      //   tab.isActive=true;
      // }
      // else{
      //   tab.isActive =false;
      // }
      tab.isActive = (idx === tabIdx)
      return tab;
      // return false;
      // return idx === tabIdx;
    })
    this.setState({
      navStructState : _navStructState
    })
  }
  render() {
    const navStructState= this.state.navStructState;
    return ( 
      <div className="navbar navbar-expand-md bg-primary navbar-dark ps-5">
        <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target="#mainNavBar">
          <span className='navbar-toggler-icon'/>
        </button>
        <div className="collapse navbar-collapse" id='mainNavBar'>
          <ul className="navbar-nav">
            {navStructState.map((tab, idx)=>{
              return (
                <li className='nav-item' key={idx}>
                  <button className={`btn nav-link ${tab.cssClass} ${tab.isActive ? "active": ""}`}
                  onClick={this.onTabbedClicked.bind(this, idx)}>
                    {tab.name}
                  </button>
                </li>
              )
            })}
            
          </ul>
        </div>
      </div>
      
    )
  }
}
