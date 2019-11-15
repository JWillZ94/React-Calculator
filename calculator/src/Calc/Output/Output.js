import React from 'react';
import Numbers from '../Buttons/Numbers/Numbers';
import './Output.scss';

class Output extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <input id="output" value={this.props.screen} />;
    }

}

export default Output;
