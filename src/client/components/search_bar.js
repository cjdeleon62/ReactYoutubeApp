// import the react library and pull of component and make it a variable called Component.
import React, {Component} from 'react';

// class-based components are used to keep track of the state it is in.
// class-based component always needs a render method and returns some JSX
// extends makes the object being extended the class' prototype
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    // define render method (function) on class or else error will occur
    // every class must have a render function
    render() {
        return (
          <div className="search-bar">
            <label>Search: </label>
            <input
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)} />
          </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}
export default SearchBar;
