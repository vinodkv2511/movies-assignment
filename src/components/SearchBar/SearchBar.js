import React from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <i className="fa fa-search"></i> <input type="text" value={props.keyword} onChange={props.onChange}></input>
        </div>
    );
};

export default SearchBar;