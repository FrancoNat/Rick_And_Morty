import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';


const Nav = ({ onSearch, setAccess }) => {
  
  const handleLogOut = () => {
   setAccess(false);
  }    

      return (
        <nav>
          
            <button>
              <Link to='/about'> ABOUT </Link>
            </button>
            <button>
              <Link to='/home'> HOME </Link>
            </button>
            <button>
              <Link to='/favorites'> Favorites </Link>
            </button>
           
           
            <SearchBar onSearch={onSearch} />
            <button onClick={handleLogOut}>Log Out</button>
            
        </nav>
      )
};

export default Nav;