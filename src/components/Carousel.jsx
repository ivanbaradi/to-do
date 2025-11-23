import CarouselSlide from "../components/CarouselSlide"
import carousel_slides from "../data/carousel_slides.json"

export default function Carousel(){

    const carousel = {
        height: '300px',
        backgroundColor: 'orangered',
        fontFamily: 'Lexend Deca, sans-serif',
        fontWeight: 500,
        color: 'white'
    }

    return (
        <div id="carousel" className="sub-content carousel slide" data-bs-ride='carousel' style={carousel}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>    
            <div className="carousel-inner" >
                {
                    carousel_slides.map((slide, index) =>  
                        <CarouselSlide 
                            key={index}
                            desc={slide.desc} 
                            active={index === 0 && true}
                        />
                    )
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}