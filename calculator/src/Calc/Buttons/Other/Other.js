import React from 'react';
import './Other.scss';


class Other extends React.Component {

    render() {
        const others = ['(', ')','<-', 'Clear']
            .map(other => <button onClick={e => this.props.handleOtherPress(e.target.value)} onMouseDown={e => this.props.handleBtnPress(e.target.value)} onMouseUp={e => this.props.handleBtnRelease(e.target.value)} className={other} value={other} key={other}>{other}</button>);

        return <div id="other-container">{others}</div>;
    }
}

export default Other;
