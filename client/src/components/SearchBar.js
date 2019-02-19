import React, {Component} from 'react';

class SearchBar extends Component {
    state = {
        searchTerm: ''
    };

    handleOnChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();

        this.props.onFormSubmit(this.state.searchTerm);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.handleFormSubmit.bind(this)} className="ui form">
                    <div className="field">
                        <label>Search: </label>
                        <div className="ui search">
                            <div className="ui icon input">
                                <input type="text" placeholder="Search for shit" value={this.state.searchTerm} onChange={this.handleOnChange}></input>
                                <i className="search icon"/>
                            </div>
                        </div> 
                    </div>  
                </form>
            </div>
        );
    }
}

export default SearchBar;