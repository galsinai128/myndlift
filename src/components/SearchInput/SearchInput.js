import './SearchInput.css';
import { useState } from 'react';
import {getFilteredData} from '../../api'
import ResultsList from '../ResultsList/ResultsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchInput({setisSearchEmpty}) {
  
  const [value, handleChange] = useState("");
  const [searchedValue, setSearchedValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  function handleSubmit(e){
      e.preventDefault();
      setSearchedValue(value);
      let filteredData = getFilteredData(value); 
      setFilteredData(filteredData);
      filteredData.length ? setisSearchEmpty(false) : setisSearchEmpty(true);
  }

  function computeResults(){
    if (filteredData.length) {
        let isPlural = filteredData.length === 1 ? 'result' : 'results'
        return `Showing ${filteredData.length} ${isPlural} for "${searchedValue}"`
    }
    else if (!filteredData.length) {
        return `No results for "${searchedValue}"`}
  }

  return (
    <div className="search-input">
      <form onSubmit={e=>handleSubmit(e)} className = {'input-form'}>
          <input 
            type="text" 
            value={value} 
            onChange={e=>handleChange(e.target.value)}
            placeholder = {'Search by city, state, or country'}
            className = {'input-element'} />
            <FontAwesomeIcon icon={faSearch} className = {'search-icon'}/>
          <input 
            type="submit" 
            value="Search"
            className = {'submit-btn'}
        />
      </form>
      <div className={'results-label'}>{computeResults()}</div>
      {filteredData.length ? (<ResultsList
                                data={filteredData}
                            />) : null}
    </div>
  );
}

export default SearchInput;