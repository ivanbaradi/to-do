export default function Footer(){

    const curr_year = new Date().getFullYear()
    const start_year = 2025
    const copyright_years = (curr_year - start_year > 0) ? `${start_year} - ${curr_year}` : start_year

    return <footer>Copyright &copy; {copyright_years} by Ivan Baradi</footer>
}