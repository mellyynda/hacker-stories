
import styled from 'styled-components';
import { IMAGE_URL } from './data';

const imageURL = "https://image.tmdb.org/t/p/original";

/*li {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 200px;
  padding: 15px;
  border: 3px black solid;
  border-radius: 10px;
  margin: 12px;
}
li>img {
  border-radius: 10px;
}*/ 

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

function ActorItem(props) {
    //console.log(props.item)
    return (<StyledLI>
      <img src={imageURL + props.item.profile_path} width="100%" alt="Actor" />
      <span>{props.item.name}</span><span>playing</span><span>{props.item.character}</span>
    </StyledLI>)
  
  }

  export default ActorItem;