import {useState} from 'react'
import { useRoutes, Link, useNavigate } from 'react-router-dom'; 
import './NavSearch.css'


function NavSearch({setSearchTerm }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();

    const toggleMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            if (newMode) {
                document.body.style.backgroundColor = 'lightgrey'; 
                document.querySelector('.darkmodeToggle').style.backgroundColor = 'rgb(73, 73, 73)'; 
                document.querySelector('.darkmodeToggle').style.color = 'white'; 
            } else {
                document.body.style.backgroundColor = 'rgb(73, 73, 73)'; 
                document.querySelector('.darkmodeToggle').style.backgroundColor = 'white'
                document.querySelector('.darkmodeToggle').style.color = 'black'; 
            }
            return newMode;
        });
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
      };

      const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
            setSearchTerm(e.target.value);
            navigate('/');
        }
      };

    return (
        <div className='NavSearch'>
            <h1 id="logo">Trackside</h1>
            <input type="search" name="searchbar" id="searchbar" placeholder='Search by Title...' onChange={handleSearchChange} onKeyDown={handleKeyDown}/>
            <Link to="/"><button className="headerBtn"> Home  </button></Link>
            <Link to="/create-post"><button className="headerBtn"> Create Post </button></Link>
            <button className='darkmodeToggle' onClick={toggleMode}>{isDarkMode ? 'Switch Dark Mode' : 'Switch Light Mode'}</button>


        </div>
    )
}

export default NavSearch;