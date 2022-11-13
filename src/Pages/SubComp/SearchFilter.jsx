import React, { useEffect, useState } from "react";

const DEFAULT_FILTER = "title";

//   class SearchFilter extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     searchText: "",
//   //     filterBy:DEFAULT_FILTER
//   //   };
//   // }
//   // onSearchTextChanged(e) {
//   //   this.setState(
//   //     {
//   //       searchText: e.target.value,
//   //     },
//   //     () => {
//   //       // after edit by setState send to props
//   //       if ("onChange" in this.props) {
//   //         this.props.onChange(this.state.searchText, this.state.filterBy); // send searchText change by props to Products handled by this function
//   //       }
//   //     }
//   //   );
//   // }
//   // onFilterSelected(e){
//   //   this.setState({
//   //       filterBy: e.target.value,/// the same value get from value of options
//   //   }, ()=>{
//   //     if ("onChange" in this.props) {
//   //       this.props.onChange(this.state.searchText, this.state.filterBy); // send filterby change by props to Products handled by this function
//   //     }
//   //   })
//   // }
//   // async onResetForm(e){
//   //   e.preventDefault();
//   //   await this.setState({
//   //       searchText:'',
//   //       filterBy:DEFAULT_FILTER,
//   //   })
//   //   if('onChange' in this.props){
//   //       this.props.onChange(this.state.searchText, this.state.filterBy);
//   //   }
//   // }
//   // render() {
//   //   return (
//   //     <div className="row ms-5 mt-3">
//   //       <form onSubmit={this.onResetForm.bind(this)}>
//   //         <div className="col-md-10 col-lg-7 d-flex">
//   //           <div className="me-2 flex-grow-1">
//   //             <input
//   //               value={this.state.searchText}
//   //               onChange={this.onSearchTextChanged.bind(this)}
//   //               className="form-control"
//   //               type="text"
//   //               placeholder="Search ..."
//   //             />
//   //           </div>
//   //           <div className="me-2 flex-grow-2">
//   //               <select
//   //               className="form-select"
//   //               onChange={this.onFilterSelected.bind(this)}
//   //               value={this.state.filterBy} >
//   //                   <option value="title">By Title</option>
//   //                   <option value="desc">By Description</option>
//   //                   <option value="titleAndDesc">By Title/ Description</option>
//   //               </select>
//   //           </div>
//   //           <div className="flex-grow-2">
//   //               <button className="btn btn-secondary">Reset</button>
//   //           </div>
//   //         </div>
//   //       </form>
//   //     </div>
//   //   );
//   // }
// }

function SearchFilter(props) {
  // console.log(props.onChange);
  const [searchText, setSearchText] = useState("");
  const [filterBy, setFilterBy] = useState(DEFAULT_FILTER);

  function onSearchTextChanged(e) {
    setSearchText(e.target.value);
  }
  function onFilterSelected(e) {
    setFilterBy(e.target.value);
  }
  const onResetForm = (e) => {
    e.preventDefault();
    setFilterBy(DEFAULT_FILTER);
    setSearchText("");
  };
  useEffect(() => {
    if ("onChange" in props) {
      props.onChange(searchText, filterBy); // send searchText change by props to Products handled by this function
    }
  }, [searchText, filterBy]);

  return (
    <div className="row ms-5 mt-3">
      <form onSubmit={onResetForm}>
        <div className="col-md-10 col-lg-7 d-flex">
          <div className="me-2 flex-grow-1">
            <input
              value={searchText}
              onChange={onSearchTextChanged}
              className="form-control"
              type="text"
              placeholder="Search ..."
            />
          </div>
          <div className="me-2 flex-grow-2">
            <select
              className="form-select"
              onChange={onFilterSelected}
              value={filterBy}
            >
              <option value="title">By Title</option>
              <option value="desc">By Description</option>
              <option value="titleAndDesc">By Title/ Description</option>
            </select>
          </div>
          <div className="flex-grow-2">
            <button className="btn btn-secondary">Reset</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchFilter;
