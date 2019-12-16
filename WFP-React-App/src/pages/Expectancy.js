import React, { Component } from 'react'
import { connect } from 'react-redux'
import  queryString from 'query-string'
import { fetchDataInit } from '../redux/actions'
// import Pagination from './pagination'

import './Expectancy.css'

class Expectancy extends Component {
    render() {
        return (
    
            <div className="tableLayout">
                {/* <h1>Life Expectancy Data at birth and at 60 years</h1> */}
                <table id = "expe" border="1">
                    <thead>
                        <tr>
                            <th>Region</th>
                            <th>GHO</th>
                            <th>year</th>
                            <th>sex</th>
                            <th>Number_of_years</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((item, index) =>
                            <tr key={index}>
                                 <td>{item.region}</td>
                                <td>{item.GHO}</td>
                                <td>{item.year}</td>
                                <td>{item.sex}</td>
                                <td>{item.number_of_years}</td>
                            </tr>
                            )}
                    </tbody>
                </table>

            </div>
        )
    }

    componentDidMount(){
        const params = queryString.parse(this.props.location.search);
        this.props.fetchData(params)
    }
}

const mapStateToProps = state => {
    return {
      data: state.data
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchData: data => dispatch(fetchDataInit(data))
    }
  }
 
//   renderTableHeader();{
//     let header = Object.keys(this.state.students[0])
//     return header.map((key, index) => {
//        return <th key={index}>{key.toUpperCase()}</th>
//     })
//  }
export default connect(mapStateToProps, mapDispatchToProps)(Expectancy);


