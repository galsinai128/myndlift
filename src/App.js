import './App.css';
import { useState } from 'react';
import AppHeader from './components/AppHeader/AppHeader'
import AppFooter from './components/AppFooter/AppFooter'
import Search from './components/Search/Search'

function App() {
  const [isSearchEmpty, setisSearchEmpty] = useState(true);
  return (
    <div className="App">
      <AppHeader/>
      <Search  setisSearchEmpty={setisSearchEmpty}/>
      {isSearchEmpty ? <AppFooter/> : null}
    </div>
  );
}

export default App;
