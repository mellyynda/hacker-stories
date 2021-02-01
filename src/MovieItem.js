import styled from 'styled-components';
import { IMAGE_URL } from './data';


const StyledLI = styled.li`
display: flex;
flex-direction: column;
align-items: center;
flex-basis: 200px;
padding: 15px;
border: 3px black solid;
border-radius: 10px;
margin: 12px;
&>img {
    border-radius: 10px;
}
`;

function MovieItem(props) {

    return (
        <StyledLI>
            <img src={IMAGE_URL + props.item.poster_path} width='100%'></img>
            <span>{props.item.title}</span>
        </StyledLI>
    )
}

export default MovieItem;