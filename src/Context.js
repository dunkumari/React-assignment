// Context(warehouese)
//provider (delivery boy)
//consumer(contextApi)(tum khud)
import React, { useContext, useEffect, useState } from "react";


 export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppContext =  React.createContext();

const AppProvider = ({ children }) =>{

    const [loading , setLoading] = useState(true);
    const [movie , setMovie] = useState([]);
    const [error , SetError] = useState({show:"false" , msg:""});
    const [query, setQuery] = useState("titanic");

    
    const getMovies = async(url)=>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setLoading(false);
                setMovie(data.Search);
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
            getMovies(`${API_URL}&s=${query}`);
        } ,800);

        return () => clearTimeout(timeOut);
      
    }, [query]);

    return <AppContext.Provider value={ {loading, movie,error ,query, setQuery}}>{children}</AppContext.Provider>

};

// global custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
}





export {AppContext, AppProvider , useGlobalContext} ;
