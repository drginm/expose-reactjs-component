import React, { Component } from 'react';

class RegularComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Who?',
        };
    }
    changeName(name) {
        this.setState({
            name: name,
        });
    }
    render() {
        return (
            <div>
                Bonjour {this.state.name} from RegularComponent!
            </div>
        );
    }
}

export default RegularComponent;
