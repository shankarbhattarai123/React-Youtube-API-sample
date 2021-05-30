import React, { Component } from 'react'

export default class SearchBar extends Component {
    state={term:'search here'};
    ValidateChange=(e)=>{
        this.setState({term:e.target.value});
        
    };
    validateSubmit=(e)=>
    {
        e.preventDefault();
       this.props.onsubmit(this.state.term);
    };
    render() {
        return (
            <>
    <form className="form-inline w-50 m-5" onSubmit={this.validateSubmit}>
  <input type="text" className="form-control mb-2 mr-sm-2" value={this.state.term} onChange={this.ValidateChange}/>
</form>
           </>
        );
    }
}
