import React from 'react';
import './Numbers.scss'

class Numbers extends React.Component {

    render() {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            .map(num => <button onClick={e => this.props.handleNumberPress(e.target.value)} value={num} key={num}>{num}</button>);

        return <div id="numbers-container">{numbers}</div>;
    }

}

export default Numbers;
