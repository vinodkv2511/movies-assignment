
import './SearchBar.css'

const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <i className="fa fa-search"></i> <input type="text" value={props.keyword} onChange={props.onChange} placeholder="Enter keyword"></input>
        </div>
    );
};

export default SearchBar;