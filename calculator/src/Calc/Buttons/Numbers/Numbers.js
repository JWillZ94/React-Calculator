import React from 'react';
import './Numbers.scss'

class Numbers extends React.Component {

    render() {
        const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
            .map(num => <button onClick={e => this.props.handleNumberPress(e.target.value)} onMouseDown={e => this.props.handleBtnPress(e.target.value)} onMouseUp={e => this.props.handleBtnRelease(e.target.value)} className={num} value={num} key={num}>{num}</button>);

        return <div id="numbers-container">{numbers}</div>;
    }

}

export default Numbers;
