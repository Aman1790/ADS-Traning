import React, { useEffect, useState } from 'react';

import MoviesList from './componentsMovie/MoviesList';
import './Appmovie.css';

function App() {
  const [movie,setMovie]=useState([]);
  const [isLoading,setIsLoading]= useState(false)
  const [error,setError] =useState(null)

  useEffect(()=>{
    fetchMovieHandler()
  },[])
  let Content =(<p>NO Movies found</p>)
   async function fetchMovieHandler(){
     setIsLoading(true)
     setError(null) 
     try{

       
       const response = await fetch('https://swapi.dev/api/films/')
      const data= await response.json()
      
      if(!response.ok){
        throw new Error ('Something is not Performing Operation')
      }
   
      const transformeddata = data.results.map(moviedata=>{
        setIsLoading(false)
        return{
          id:moviedata.episode_id,
          title:moviedata.title,
          openingText:moviedata.opening_crawl,
          releaseDate:moviedata.release_date
        }
      });
        setMovie(transformeddata)
      
    }
  catch(error){
    setError(error.message)
    setIsLoading(false)
  }
 
 
  }
  if(movie.length > 0){
    Content=(<MoviesList movies={movie}/>)
  }

  if(movie.length===0){
    Content=(<p>No Data Found..</p>)
  }
  if(error){
    Content=(<p>{error}</p>)
  }
  if(isLoading){
    Content=(<p>Loading.....  </p>)
  }
  // const dummyMovies = [  
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
      {Content}
      </section>
    </React.Fragment>
  );
  
}

export default App;
