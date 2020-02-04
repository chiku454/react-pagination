import React from  'react';
// import _callAPI   from '../../utils'
import TextField from '../textField';

import '../style.css';
export default class Table extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: [],
            tableDataTemp: [],
            sizePerPage: 10
        }
    }
    _callAPI(url){
        fetch(url) 
          
        .then(res => { return res.json()})
        .then(data => {
          this.setState({
            tableData: data,
            tableDataTemp : JSON.parse(JSON.stringify(data)).splice(0, this.state.sizePerPage, 0)
          })
        })
        .catch(function(err) {
          console.log('err', err)
        });
    
    }
    
    componentDidMount(){
      this._callAPI("https://api.myjson.com/bins/xkmgh");
    }
    makeUI = () => {
        const { tableDataTemp }  = this.state;
        return(
            <table id={'main-table'}>
                <tbody>
                    <tr key={'table-heading'}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Company</th>
                    </tr>
                    {tableDataTemp && tableDataTemp.map((unit, i) => {
                            return(
                                <tr key={unit._id + i}>
                                    <td>{unit._id}</td>
                                    <td>{unit.name}</td>
                                    <td>{unit.type}</td>
                                    <td>{unit.company}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        )
    }
    _handlePagination = (index) => {
        const { tableData, sizePerPage, tableDataTemp } = this.state;
        this.setState({
            tableDataTemp: JSON.parse(JSON.stringify(tableData)).splice(index, sizePerPage, 0)
        })
    }
    makePagination = () => {
        const {tableData, sizePerPage } = this.state;
        const renderPagiBox = []
        let count = 1;
        for(let i = 1 ; i < tableData.length ; i = i + sizePerPage){
            renderPagiBox.push(<div className="paginationBoxStyle" onClick={() => this._handlePagination(i)}>{count++}</div>);
        }
        return <div className="paginationBoxWrapper">{renderPagiBox}</div>
    }
    getSearchValue = (data) => {
        // const tableDataTemp = []
        // const  tableData = JSON.parse(JSON.stringify(this.state.tableData));
    //     console.log('get Value', data, tableData);
    //     if(tableData && tableData.length && data){
    //      tableData.forEach((unit) => {
    //         if(unit.name.indexOf(data) !== -1){
    //             tableDataTemp.push(unit);
    //         }
    //     })
    //     this.setState({tableDataTemp})
    // }
    }
    render(){
        return(
            <div key={'render-table-comp'}>
                <TextField getvalue={this.getSearchValue}/>
                {this.makePagination()}
                {this.makeUI()}
            </div>
        )
    }
}
