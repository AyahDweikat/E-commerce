import React, { Component } from 'react'
// import { useSearchParams } from 'react-router-dom'
import {withRoute} from '../../Utils/HigherOrderComp';


class Info extends Component {
    // params = useSearchParams();
  render() {
    return (
      <div>
        <h1>Info Page</h1>
        <div>{this.props.queryString[0].get('data')}</div>
        <div>data from location state, {this.props.location?.state?.data}</div>
        <div>data from router parameter {this.props.params.id}</div>
      </div>
    )
  }
}
export default withRoute(Info);
