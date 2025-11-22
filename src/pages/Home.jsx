import Carousel from "../components/Carousel"
import Feature from "../components/Feature"

function Home(){

    const titleCSS = {
        marginBottom: '40px',
        fontWeight: 600,
        fontSize: '35px'
    }

    return (
        <main>
            <Carousel />
            <Feature titleCSS={titleCSS}/>            
        </main>
    )
}

export default Home