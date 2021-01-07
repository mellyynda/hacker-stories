import Bar from './Bar';

function Place (props) {
    return (<>
            <h1>Place: {props.location} at {props.elevation} meters.</h1>
            <Bar />
            </>);
}

export default Place;
