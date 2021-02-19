import './App.css';
import AppHeader from './components/AppHeader/AppHeader'
import AppFooter from './components/AppFooter/AppFooter'
import Search from './components/Search/Search'

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Search/>
      <AppFooter/>
    </div>
  );
}

export default App;
