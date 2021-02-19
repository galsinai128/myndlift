import './Search.css';
import SearchInput from '../SearchInput/SearchInput'

function Search({setisSearchEmpty}) {
  return (
    <div className="search">
      <div className="search-title">Nearby Myndlift Providers</div>
      <SearchInput setisSearchEmpty={setisSearchEmpty}/>
    </div>
  );
}

export default Search;