import React from 'react';
import Output from './Output/Output';
import Buttons from './Buttons/Buttons';
import './Calc.scss';

class Calc extends React.Component {

    constructor(props) {
        super(props);
        this.state = {screen: ''};

        this.handleScreenChange = this.handleScreenChange.bind(this);
    }

    handleScreenChange(char) {
        console.log(char);

        switch(char) {
            case '<-':
                char = '';
                this.setState(state => ({
                    screen: state.screen.slice(0, -1)
                }));
                break;

            case 'clear':
                char = '';
                this.setState(state => ({
                    screen: ''
                }));
                break;

            case ')':
                let leftCount = 0;
                let rightCount = 1;
                [...this.state.screen].forEach(i => {
                    if (i === '(') {
                        leftCount++;
                    } else if (i === ')') {
                        rightCount++;
                    }
                })
                if (leftCount >= rightCount) {
                    this.setState(state => ({
                        screen: state.screen += char
                    }));
                } else {
                    char = '';
                }
                break;

            case '+':
            case '-':
            case '*':
            case '/':
                if (!this.state.screen.length && char !== '-') {
                    char = '';
                } else if (
                    (this.state.screen.slice(-1) === '*' ||
                    this.state.screen.slice(-1) === '/' ||
                    this.state.screen.slice(-1) === '(') &&
                    char === '-'
                ) {
                    this.setState(state => ({
                        screen: state.screen += char
                    }));
                } else if (
                    this.state.screen.slice(-1) === '+' ||
                    this.state.screen.slice(-1) === '-' ||
                    this.state.screen.slice(-1) === '*' ||
                    this.state.screen.slice(-1) === '/' ||
                    this.state.screen.slice(-1) === '('
                ) {

                    char = '';
                } else {
                    this.setState(state => ({
                        screen: state.screen += char
                    }));
                }
                break;

            default:
                this.setState(state => ({
                    screen: state.screen += char
                }));
                break;
        }


    }

    render() {
        return (
            <div id="calc-container">
                <Output screen={this.state.screen} />
                <Buttons handleScreenChange={this.handleScreenChange} />
            </div>
        );
    }
}

export default Calc;
