import React from 'react';
import Numbers from './Numbers/Numbers';
import Operators from './Operators/Operators';
import Other from './Other/Other';
import './Buttons.scss';

class Buttons extends React.Component {

    render() {
        return (
            <div id="btns-container">
                <Numbers handleNumberPress={this.props.handleScreenChange}/>
                <Operators handleOperatorPress={this.props.handleScreenChange} />
                <Other handleOtherPress={this.props.handleScreenChange}/>
            </div>
        );
    }
}

export default Buttons;
