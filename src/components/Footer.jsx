export default function Footer(){

    const currYear = new Date().getFullYear()
    const startYear = 2025
    const copyrightYears = (currYear - startYear > 0) ? `${startYear} - ${currYear}` : startYear

    return <footer>Copyright &copy; {copyrightYears} by Ivan Baradi</footer>
}