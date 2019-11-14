import React from 'react';
import Output from '../../Output/Output';


class Numbers extends React.Component {
    constructor(props) {
        super(props);

    }

    handleNumberPress(e) {
        let num = e.target.value;

        console.log(num);
        Output.prototype.handleScreenChange(num);
    }

    render() {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            .map(num => <button onClick={this.handleNumberPress} value={num}>{num}</button>);

        return <ul>{numbers}</ul>;
    }

}

export default Numbers;
