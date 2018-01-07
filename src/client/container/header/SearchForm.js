import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Input } from '../../components/form';

class SearchForm extends Component {
    render() {
        return (
            <form onSubmit={this.search}>
                <Input name="term" placeholder="Search" />
            </form>
        );
    }

    search = e => {
        e.preventDefault();

        const term = e.target.term.value;
        this.props.history.push(`/search/${term}`);
    };
}

export default withRouter(SearchForm);
