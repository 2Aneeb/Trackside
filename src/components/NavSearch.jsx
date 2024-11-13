import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './NavSearch.css'

function NavSearch() {

    return (
        <div className='NavSearch'>
            <h1 id="logo">Trackside</h1>
            <input type="search" name="searchbar" id="searchbar" placeholder='Search...'/>
            <Link to="/"><button className="headerBtn"> Home  </button></Link>
            <Link to="/create-post"><button className="headerBtn"> Create Post </button></Link>
            

        </div>
    )
}

export default NavSearch;