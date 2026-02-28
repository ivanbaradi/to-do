import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({pathname}){
 
    // useState to change navbar active item states by name
    const [activeNavPath, setActiveNavPath] = useState(pathname)

    /** 
     * Changes navbar path active state whenever its nav item gets clicked
     * @param {string} navPath - current nav Path to set as active
     */
    function changeActiveNavPath(navPath){
        setActiveNavPath(navPath)
    }

    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand h1 mb-0' onClick={changeActiveNavPath} to='/'>To Do</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="navbar-nav">
                        <Link className={`${activeNavPath === '/add-item' && 'active'} nav-link text-start`} onClick={() => changeActiveNavPath('/add-item')} to='/add-item'>Add Item</Link>
                        <Link className={`${activeNavPath === '/list' && 'active'} nav-link text-start`} onClick={() => changeActiveNavPath('/list')} to='/list'>List</Link>
                        <Link className={`${activeNavPath === '/about' && 'active'} nav-link text-start`} onClick={() => changeActiveNavPath('/about')} to='/about'>About</Link>
                    </div>
                </div>
            </div>
        </nav> 
    )
}