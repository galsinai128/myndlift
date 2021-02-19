import './Search.css';
import SearchInput from '../SearchInput/SearchInput'

function Search() {
  return (
    <div className="search">
      <div className="search-title">Nearby Myndlift Providers</div>
      <SearchInput/>
    </div>
  );
}

export default Search;