import React, { Component } from 'react';
import './autocomplete.scss';

class Autocomplete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }
    render() {
        const {
            suggestions,
            onChangeText,
            onChangeSelection,
            text,
        } = this.props;

        const {
            isOpen,
        } = this.state;

        return (
            <div>
                <input type="text" placeholder="Buscar Cursos..." className="inp-curso entrada"
                    value={text}
                    onChange={(event) => {
                        const newText = event.target.value;

                        onChangeText(newText);

                        if (!isOpen && newText) {
                            this.setState({ isOpen: true });
                        } else if (isOpen && !newText) {
                            this.setState({ isOpen: false });
                        }
                    }}

                    onFocus={() => {
                        if (!text) {
                            this.setState({ isOpen: false });
                        }
                    }}

                    onKeyPress={(event) => {
                        if (event.key === 'Enter' && text) {
                            onChangeSelection(text);
                            this.setState({
                                isOpen: false
                            })
                        }
                    }}
                />
                {isOpen &&
                    <ul className="sub-menu suggestions">
                        {suggestions.map(suggestion =>
                            <li
                                key={suggestion.id}
                                component="li"
                                onClick={(e) => {
                                    onChangeSelection(suggestion.name);
                                    this.setState({ isOpen: false });
                                }}
                            >
                                {suggestion.name}
                            </li>
                        )}
                    </ul>
                }
            </div>
        );
    }
}

export default Autocomplete;
