import React from 'react';
import Output from '../../Output/Output';
import './Numbers.scss'

class Numbers extends React.Component {
    constructor(props) {
        super(props);
    }

    handleNumberPress(e) {
        let num = e.target.value;
    }

    render() {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            .map(num => <button onClick={e => this.props.handleNumberPress(e.target.value)} value={num} key={num}>{num}</button>);

        return <ul>{numbers}</ul>;
    }

}

export default Numbers;
