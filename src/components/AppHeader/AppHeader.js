import './AppHeader.css';
import logo from '../../assets/logo.png'

function AppHeader() {
  return (
    <div className="app-header">
      <img src={logo} className="logo-image"/>
    </div>
  );
}

export default AppHeader;