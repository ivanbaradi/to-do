import { Link } from 'react-router-dom';

function Header(){

    const linkStyle = {
        textDecoration: 'none', 
        color: 'black'
    }

    const titleStyle = {
        fontSize: 50,
        marginTop: 30
    }

    return <Link to='/' style={linkStyle}><h1 style={titleStyle}>To Do</h1></Link>
}

export default Header