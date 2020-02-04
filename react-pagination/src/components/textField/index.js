import React from 'react';
import '../style.css'
export default class TextField extends React.Component{
    constructor(){
        super();
        this.state = {
            searchVal: ''
        }
    }
    render(){
        return(
            <div className="input-box">
                <label>Search Value</label>
                <input type="text" value={this.state.searchVal} onChange={(e) => this.setState({ searchVal: e.target.value})} getvalue={this.props.getvalue(this.state.searchVal)}/>
            </div>
        )
    }
}


