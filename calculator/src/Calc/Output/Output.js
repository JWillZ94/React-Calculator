import React from 'react';
import './Output.scss';

class Output extends React.Component {
    constructor(props) {
        super(props);
        this.state = '';
    }

    handleScreenChange() {
        
    }

    render() {
        return <input id="output" value={this.state} onChange={this.handleScreenChange} />;
    }

}

export default Output;
