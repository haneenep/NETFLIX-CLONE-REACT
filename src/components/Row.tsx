import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface Data {
    title : string;
    fetchURL : string;
}

interface Movie{
  title : string;
  backdrop_path : string
}

const Row = ({title,fetchURL} : Data) => {

    const [movies,setMovies] = useState<Movie[]>([])

    useEffect(() => {
        axios.get(fetchURL)
        .then((response) => {
            setMovies(response.data.results)
        })
    },[fetchURL])

    console.log(movies);
    

  return (
    <div>
      <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>
    </div>
  )
}

export default Row;
