import React from 'react';
import './Operators.scss'

class Operators extends React.Component {

    render() {
        const ops = ['+', '-', '*', '/', '=']
            .map(op => <button value={op} key={op}>{op}</button>);

        return <ul id="operators-container">{ops}</ul>;
    }
}

export default Operators;
