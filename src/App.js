import Hello from './Hello';
import ACTOR_DATA, { API_URL, LISTS, API_KEY, SETTINGS } from './data.js';
import Bar from './Bar';
import ActorList from './ActorList.js'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import React from 'react';
import MovieList from './MovieList';
import { useState, useEffect } from 'react';
import MiddleOne from './MiddleOne';
import MovieContext from './MovieContext';

//import './App.css';


const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`; 

// const H1 = styled.h1`
// text-align: center;
// padding: 15px;
// `;

const StyledLabel = styled.label`
border: none;
text-align: center;
`;

const StyledInput = styled.input`
border: none;
text-align: center;
outline: none;

&:hover,
&:active,
&:focus {
  box-shadow: 0px 10px 13px -7px #000000;
}
`;

const Title = styled.h1`
text-align: center;
  padding: 15px;
`;

function App() {

const [movies, setMovies] = useState([]);
const [display, setDisplay] = useState(LISTS[0]);
const [listTitle, setListTitle] = useState(LISTS[0].replace('/', '').replace('_', ' ').toUpperCase());

useEffect(() => {
  fetch(API_URL + display + API_KEY + SETTINGS)
    .then(response => response.json())
    .then(data => setMovies(data.results))
}, [display])

const search = (e) => {
  const query = e.target.value;
  const list = [];
  movies.map(movie => {
    if(movie.title.toLowerCase().includes(query.toLowerCase())){
      console.log(movie);
      list.push(movie);
    }
  })
  setMovies(list);
  console.log('function stop');
}

const contextDataObject = { data: movies, title: listTitle, LISTS, setDisplay, setListTitle };
console.log(contextDataObject);

  return (<>
  <MovieContext.Provider value={contextDataObject}>
    <React.Fragment><div>
    <Container>
      <Title>My Hacker Stories</Title>

      

      <StyledLabel htmlFor="search">Search: </StyledLabel>
      <StyledInput id="search" type="text" onChange={search}/>
      <MiddleOne data={movies} title={listTitle} />
      {/* <button onClick={() => setDisplay(TOP_RATED)}>Top rated</button>
      <button onClick={() => setDisplay(UPCOMING)}>Upcoming</button>
      <button onClick={() => setDisplay(POPULAR)}>Popular</button> */}

      <Bar />
      <MovieList  />
      {/* <MovieList data={movies} title={listTitle}/> */}
      {/* <Hello title={Title} /> */}
      {/* <ActorList data={ACTOR_DATA.cast} /> */}

      {/* <ClassPlace location="Kilimanjaro" elevation="1500" />; */}
      {/*list.map(function (item) {
        return (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>);
      })*/}
    </Container></div>
    <GlobalStyle />
    </React.Fragment>
    </MovieContext.Provider>
    </>
  );
}


export default App;
