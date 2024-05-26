import {useState, useMemo, useEffect, useRef} from 'react';
import './SearchBarComponent.css';
import searchIcon from '.././../assets/searchIcon.png';
import axios from 'axios';
import { NavLink } from "react-router-dom";

export default function SearchBarComponent ({openSearch, setOpenSearch}) {

    const searchRef= useRef();


    const [searchInput, setSearchInput] = useState(null);
    const [searchResult, setSearchResult] = useState([]);

    const searchHandler = useMemo(() => {

        if(searchInput === '' || searchInput === null){
            setSearchResult(null);
            return;
        }

        axios.post('http://localhost:8000/blogs/search',{searchInput},{headers:{"x-api-key":1234567890123456}})
        .then(resp => {
            setSearchResult(resp.data.searchResult);
        })
        .catch(err => {
            console.log("Search error: ", err.message);
        })

    },[searchInput])

    useEffect(() => {
        if(openSearch)
            searchRef.current.focus();
    })

    return (
        <div className='searchWholeCont' onClick={e => e.stopPropagation()}>
            <img className='searchIcon' onClick={e=>setOpenSearch(!openSearch)}
                src={searchIcon} alt='search icon'
            />
            {
                openSearch &&
                <div className='openSearchCont'>
                    <input className='searchInputBar' onChange={e => setSearchInput(e.target.value)}
                        placeholder='Search' ref={searchRef}
                    />
                    {searchResult && 
                        <div className='searchDropDown'>
                        {
                            searchResult?.map((eachResult) => {

                                return (
                                    <NavLink key={eachResult} className='eachSearchDropDown'
                                        exact to={'/blogs/'+eachResult._id}
                                    >
                                        <p className='eachSearchDropDownText'>{eachResult.title}</p>
                                    </NavLink>
                                )
                            })
                        }
                        </div>
                    }
                </div>
            }
        </div>
    )
}