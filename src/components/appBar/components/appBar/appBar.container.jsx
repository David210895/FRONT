import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import findSuggestions from '../../store/actions';
import findResults from '../../../../features/profileMentor/store/actions';

import Autocomplete from './autocomplete/autocomplete';

class IAppBarComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
    }

    onChangeText(text) {
        const {
            findSuggestions
        } = this.props;

        this.setState({
            text
        });
        findSuggestions(text);
    }

    onChangeSelection(text) {
        const {
            findResults,
            match,
            history,
        } = this.props;
        this.setState({ 
            text 
        });
        findResults(text);
        if (match.path !== '/busqueda') {
            history.push('/busqueda');
        }
    }

    render() {
        const {
            text,
        } = this.state;
        const {
            suggestions,
        } = this.props;

        return (
            <Autocomplete
                text={text}
                suggestions={suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
            />
        );
    }
}

const mapStateToProps = state => ({
    suggestions: state.suggestions,
});

const mapDispatchToProps = {
    findSuggestions,
    findResults,
};


const IAppBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(IAppBarComponent));

export {
    IAppBar
}
