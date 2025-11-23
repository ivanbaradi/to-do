import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(){

    // useState to change navbar active item states by name
    const [activeNavItem, setActiveNavItem] = useState(null)

    /** 
     * Changes states navbar active item when clicked
     * @param {string} itemName - name of the navbar item
     */
    function changeActiveNavItem(itemName){
        setActiveNavItem(itemName)
    }

    const navItem = {
        textAlign: 'left'
    }

    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand h1 mb-0' onClick={changeActiveNavItem} to='/'>To Do</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="navbar-nav">
                        <Link className={activeNavItem === 'item1' ? 'nav-link active' : 'nav-link'} style={navItem} onClick={() => changeActiveNavItem('item1')} to='/add-item'>Add Item</Link>
                        <Link className={activeNavItem === 'item2' ? 'nav-link active' : 'nav-link'} style={navItem} onClick={() => changeActiveNavItem('item2')} to='/list'>List</Link>
                        <Link className={activeNavItem === 'item3' ? 'nav-link active' : 'nav-link'} style={navItem} onClick={() => changeActiveNavItem('item3')} to='/about'>About</Link>
                    </div>
                </div>
            </div>
        </nav> 
    )
}