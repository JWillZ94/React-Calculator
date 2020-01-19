import React from 'react';
import './Output.scss';

class Output extends React.Component {

    render() {

        return (
            <div id="output">
                <span id="output-value-space">{this.props.screen}</span>
            </div>
        );
    }

}

export default Output;
