import React from 'react';
import './Output.scss';

class Output extends React.Component {

    render() {
        return <input id="output" value={this.props.screen} readOnly />;
    }

}

export default Output;
