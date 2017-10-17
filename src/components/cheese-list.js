import React from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions/cheese'

export class CheeseList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }

  render() {
    console.log(this.props.cheeses)
    return (
      <ul>
        {this.props.cheeses.map((cheese, idx) => (
          <li key={idx}>{cheese}</li>
        ))}
      </ul>
    )
  }

}

const mapStateToProps = state => ({
  cheeses: state.cheeses || []
})

export default connect(mapStateToProps)(CheeseList) 