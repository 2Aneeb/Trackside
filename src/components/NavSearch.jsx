import {useState} from 'react'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './NavSearch.css'


function NavSearch() {
    const [isDarkMode, setIsDarkMode] = useState(false);

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

    return (
        <div className='NavSearch'>
            <h1 id="logo">Trackside</h1>
            <input type="search" name="searchbar" id="searchbar" placeholder='Search...'/>
            <Link to="/"><button className="headerBtn"> Home  </button></Link>
            <Link to="/create-post"><button className="headerBtn"> Create Post </button></Link>
            <button className='darkmodeToggle' onClick={toggleMode}>{isDarkMode ? 'Switch Dark Mode' : 'Switch Light Mode'}</button>
         
            
            

        </div>
    )
}

export default NavSearch;