import React from 'react';
import Numbers from '../Buttons/Numbers/Numbers';
import './Output.scss';

class Output extends React.Component {
    constructor(props) {
        super(props);
        this.state = {screen: ''};
    }

    handleScreenChange(char) {
        console.log(char);
        console.log(this.state.screen);
        // this.setState(state => ({
        //     screen: state.screen + char
        // }));
    }

    render() {
        console.log(this.state.screen);

        return <input id="output" value={this.state.screen} onChange={this.handleScreenChange} />;
    }

}

export default Output;
