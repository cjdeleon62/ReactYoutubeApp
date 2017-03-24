import React from 'react'
import { connect } from 'react-redux';

class App extends React.Component {
  render () {
    console.log(this.props);
    return (
      <div>
        <h1>Hello Chris</h1>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    test: state.test
  }
}

export default connect(mapStateToProps)(App);
