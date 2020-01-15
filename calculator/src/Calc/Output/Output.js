import React from 'react';
import './Output.scss';

class Output extends React.Component {

    render() {
        return (
            <div>
                <input id="output" value={this.props.screen} readOnly />
                <i></i>
            </div>
        );
    }

}

export default Output;
