import React from 'react';
import Numbers from './Numbers/Numbers';
import Operators from './Operators/Operators';
import Other from './Other/Other';
import './Buttons.scss';

class Buttons extends React.Component {

    render() {
        return (
            <div id="btns-container">
                <Numbers handleNumberPress={this.props.handleScreenChange} handleBtnPress={this.props.handleBtnPress} handleBtnRelease={this.props.handleBtnRelease} />
                <Operators handleOperatorPress={this.props.handleScreenChange} handleBtnPress={this.props.handleBtnPress} handleBtnRelease={this.props.handleBtnRelease} />
                <Other handleOtherPress={this.props.handleScreenChange} handleBtnPress={this.props.handleBtnPress} handleBtnRelease={this.props.handleBtnRelease} />
            </div>
        );
    }
}

export default Buttons;
