import React from 'react';
import Output from './Output/Output';
import Buttons from './Buttons/Buttons';
import './Calc.scss';

class Calc extends React.Component {

    constructor(props) {
        super(props);
        this.state = {screen: '600000-500'};

        this.handleScreenChange = this.handleScreenChange.bind(this);
        this.handleBtnPress = this.handleBtnPress.bind(this);
        this.handleBtnRelease = this.handleBtnRelease.bind(this);
    }

    handleBtnPress(char) {
        document.getElementsByClassName(char)[0].classList.add('pressed');
    }

    handleBtnRelease(char) {
        document.getElementsByClassName(char)[0].classList.remove('pressed');
    }

    handleScreenChange(char) {

        document.getElementById('output-value-space').classList.remove('eval');

        switch(char) {
            case '<-':
                char = '';
                this.setState(state => ({
                    screen: state.screen.slice(0, -1)
                }));
                break;

            case 'Clear':
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

            case '=':
                function newEval(fn) {
                    [...fn].forEach((val, i, a) => {
                        if (a[i + 1] && Number(a[i]) && a[i + 1] === '(') {
                            a.splice(i + 1, 0, '*');
                            fn = a.join('');
                        } else if (a[i + 1] && Number(a[i + 1]) && a[i] === ')') {
                            a.splice(i, 0, '*');
                            fn = a.join('');
                        }
                    });
                    return new Function('return ' + fn)();
                }

                let ans = newEval(this.state.screen);

                if (ans.toString().length >= 6) ans = ans.toExponential(2);

                this.setState({
                    screen: ans.toString()
                });

                document.getElementById('output-value-space').classList.add('eval');

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
                <Buttons handleScreenChange={this.handleScreenChange} handleBtnPress={this.handleBtnPress} handleBtnRelease={this.handleBtnRelease} />
            </div>
        );
    }

    componentDidUpdate() {
        document.getElementById('output').scrollLeft = 300;
    }
}

export default Calc;
