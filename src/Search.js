import React from 'react';
import { useGlobalContext } from './Context';


const Search = () => {
    const { query, setQuery, SetError } = useGlobalContext();
    return (
        <>
    <section className='search-section'>
        <h2>Search your movie</h2>
        <form action='#' onSubmit={(e) => e.preventDefault()}>
            <div>
            <input
              type="text"
              placeholder="search movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            </div>

        </form>
        <div className='card-error'>
                    {/* <p>{SetError.show && SetError.msg}</p> */}
        </div>

    </section>
    </>
    )
   
    
     
     
 }

export default Search;
