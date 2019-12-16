import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchDataInit } from '../redux/actions'


import './Expectancy.css'


class Expectancy extends Component {
    render() {
        return (
            <div className="tableLayout">
                <table border="1">
                    <thead>
                        <tr>
                            <th>GHO</th>
                            <th>Region</th>
                            <th>year</th>
                            <th>sex</th>
                            <th>Number_of_years</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((item, index) =>
                            <tr key={index}>
                                <td>{item.GHO}</td>
                                <td>{item.region}</td>
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
        this.props.fetchData({page:1, sex:'Female' })
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

export default connect(mapStateToProps, mapDispatchToProps)(Expectancy);