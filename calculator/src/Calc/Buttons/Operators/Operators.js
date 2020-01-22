import React from 'react';
import './Operators.scss'

class Operators extends React.Component {

    render() {
        const ops = ['+', '-', '*', '/', '=']
            .map(op => <button onClick={e => this.props.handleOperatorPress(e.target.value)} value={op} key={op}>{op}</button>);

        return <div id="operators-container">{ops}</div>;
    }
}

export default Operators;
