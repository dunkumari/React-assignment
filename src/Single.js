
import { NavLink, useParams } from 'react-router-dom';
import { API_URL } from './Context';
import { useEffect, useState } from 'react';


const Single = () => {
    const { id } = useParams();

    const [loading , setLoading] = useState(true);
    const [movie , setMovie] = useState([]);
    const [error , SetError] = useState({show:"false" , msg:""});
    const [query, setQuery] = useState("titanic");

    
    const getMovies = async(url)=>{
        setLoading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setLoading(false);
                setMovie(data);
            }else {
                SetError({
                    show: true,
                    msg: data.Error,
            });

            }


        } catch(error){
            console.log(error);
        }

    };
    useEffect(() =>{
       let timeOut = setTimeout(() =>{
            getMovies(`${API_URL}&i=${id}`);
        } ,800);

        return () => clearTimeout(timeOut);
      
    }, [id]);

    if(loading){
      return (
        <div className='movie-section'>
            <div className='loading'Loading></div>
        </div>
      );  
    }
   
   return (
        <>
        <section className='movie-section'>
            <div className='movie-card'>
                <figure>
                    <img src={movie.Poster} alt="" />
                </figure>
                <div className='card-content'>
                   <p className='title'>{movie.Title}</p>
                   <p className='card-text'>{movie.Released}</p>
                   <p className='card-text'>{movie.Genre}</p>
                   <p className='card-text'>{movie.imdbRating}</p>
                   <p className='card-text'>{movie.Country}</p>
                   <NavLink to="/" className='back-btn'>Go BACK</NavLink>

                </div>

            </div>
        </section>
        </>
    )
    
    
}

export default Single;
