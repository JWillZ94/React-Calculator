import React from 'react';
import './Output.scss';

class Output extends React.Component {
    constructor(props) {
        super(props);
        this.state = '';
    }

    render() {
        return <input id="output" value={this.state} onChange={this.handleChange} />;
    }

}

export default Output;
