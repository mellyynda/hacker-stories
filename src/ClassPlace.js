import React from 'react';
import Bar from './Bar';

class ClassPlace extends React.Component {
    render() {
    return (<>
            <h1>Place: {this.props.location} at {this.props.elevation} meters.</h1>
            <Bar />
            </>);
        }
}

export default ClassPlace;

