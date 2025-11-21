import { Link } from 'react-router-dom';

function NavBar(){

    console.log('navbar activated')

    const navHeader = {

    }

    const navItem = {
        textAlign: 'left'
    }

    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand h1 mb-0'>To Do</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="navbar-nav">
                        <Link className="nav-link" style={navItem} to='/add-item'>Add Item</Link>
                        <Link className="nav-link" style={navItem} to='/list'>List</Link>
                        <Link className="nav-link" style={navItem} to='/about'>About</Link>
                    </div>
                </div>
            </div>
        </nav> 
    )
}

export default NavBar