import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: null
        };
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.searchData(this.state['text']);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field">
                        <label>{this.state.text}</label>
                        <input type="text" 
                        onChange={e => this.setState({text: e.target.value})}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
