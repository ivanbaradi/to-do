import { getCopyRightYears } from "../utils/date"

export default function Footer(){
    return <footer>Copyright &copy; {getCopyRightYears()} by Ivan Baradi</footer>
}