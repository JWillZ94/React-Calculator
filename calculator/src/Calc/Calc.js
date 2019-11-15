import React from 'react';
import Output from './Output/Output';
import Numbers from './Buttons/Numbers/Numbers';
import './Calc.scss';

class Calc extends React.Component {

    constructor(props) {
        super(props);
        this.state = {screen: ''};

        this.handleScreenChange = this.handleScreenChange.bind(this);
    }

    handleScreenChange(char) {
        console.log(char);

        this.setState(state => ({
            screen: state.screen += char
        }));
    }

    render() {
        return (
            <div id="calc">
                <Output screen={this.state.screen} />
                <Numbers handleNumberPress={this.handleScreenChange}/>
            </div>
        );
    }
}

export default Calc;
