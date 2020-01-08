import React from 'react';
import './Other.scss';

class Other extends React.Component {

    render() {
        const others = ['(', ')', '<-', 'clear']
            .map(other => <button onClick={e => this.props.handleOtherPress(e.target.value)} value={other} key={other}>{other}</button>);

        return <ul id="other-container">{others}</ul>;
    }
}

export default Other;
