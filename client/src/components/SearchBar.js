import React, {Component} from 'react';

class SearchBar extends Component {
    state = {
        searchTerm: ''
    };

    handleOnChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        });
        this.props.onSearchChange(this.state.searchTerm.trim().toLowerCase());
    }

    render() {
        return (
                <form onSubmit={e => e.preventDefault()} className="ui form">
                    <div className="field">
                        <div className="ui search">
                            <div className="ui icon input">
                                <input type="text" placeholder="Search for people (not yet implemented, use to update list)" value={this.state.searchTerm} onChange={this.handleOnChange}></input>
                                <i className="search icon"/>
                            </div>
                        </div> 
                    </div>  
                </form>
        );
    }
}

export default SearchBar;