import { Link } from 'react-router-dom';

function NavBar(){

    const middle = {
        margin: '10px 100px'
    }

    const navItem = {
        fontFamily: "Vend Sans, sans-serif",
        fontWeight: 'bold',
        padding: '5px 15px',
    }

    return (
        <nav>
            <Link to='/add-item'>
                <button className='btn btn-dark' style={navItem}>Add Item</button>
            </Link>
            <Link to='/list'>
                <button className='btn btn-dark' style={{...navItem, ...middle}}>List</button>
            </Link>
            <Link to='/about'>
                <button className='btn btn-dark' style={navItem}>About</button>
            </Link>
        </nav> 
    )
}

export default NavBar