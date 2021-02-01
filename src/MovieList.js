import MovieItem from './MovieItem';
//import { IMAGE_URL } from './data';
import styled from 'styled-components';
import MovieContext from './MovieContext';
import React from 'react';

const StyledUL = styled.ul`
    display: flex;
    list-style-type: none;
    flex-wrap: wrap;
`;

function MovieList() {

    const { data, LISTS, setDisplay, setListTitle, title } = React.useContext(MovieContext);

    return(<div>
        {LISTS.map((list) => {
            const title = list.replace('/', '').replace('_', ' ').toUpperCase();
            return (
            <button onClick={() => {
                setDisplay(list);
                setListTitle(title);
                }
            }> {title}</button>
            )
        })}
        <h1>{title}</h1>
            <StyledUL>
                {data.map(item => {
                    return(
                        <MovieItem key={item.id} item={item} />
                    )
                })}
            </StyledUL>
        </div>
    )
}

export default MovieList;