import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({pathname}){

    // useState to change navbar active item states by name
    const [activeNavURL, setActiveNavURL] = useState(pathname)

    /** 
     * Changes states navbar active item when clicked
     * @param {string} itemName - name of the navbar item
     */
    function changeActiveNavURL(itemName){
        setActiveNavURL(itemName)
    }

    const navURL = {
        textAlign: 'left'
    }

    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand h1 mb-0' onClick={changeActiveNavURL} to='/'>To Do</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="navbar-nav">
                        <Link className={activeNavURL === '/add-item' ? 'nav-link active' : 'nav-link'} style={navURL} onClick={() => changeActiveNavURL('/add-item')} to='/add-item'>Add Item</Link>
                        <Link className={activeNavURL === '/list' ? 'nav-link active' : 'nav-link'} style={navURL} onClick={() => changeActiveNavURL('/list')} to='/list'>List</Link>
                        <Link className={activeNavURL === '/about' ? 'nav-link active' : 'nav-link'} style={navURL} onClick={() => changeActiveNavURL('/about')} to='/about'>About</Link>
                    </div>
                </div>
            </div>
        </nav> 
    )
}