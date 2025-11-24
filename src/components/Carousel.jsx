import CarouselSlide from "../components/CarouselSlide"
import carouselSlides from "../data/carouselSlides.json"

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
                {
                    carouselSlides.map((_, index) => 
                        <button 
                            key={index}
                            type="button" 
                            data-bs-target="#carousel" 
                            data-bs-slide-to={index} 
                            className={index === 0 ? 'active' : undefined} //first slide indicator is active by default
                            aria-current="true" 
                            aria-label={`Slide ${index+1}`} 
                        />
                    )
                }
            </div>    
            <div className="carousel-inner" >
                {
                    carouselSlides.map(({desc}, index) =>  
                        <CarouselSlide 
                            key={index}
                            desc={desc} 
                            active={index === 0} // first slide is active by default
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