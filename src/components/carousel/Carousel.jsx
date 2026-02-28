import CarouselSlide from "./CarouselSlide"
import CarouselButton from "./CarouselButton"
import carouselSlides from "../../data/carouselSlides.json"

export default function Carousel(){

    const carousel = {
        height: '300px',
        backgroundColor: 'orangered',
        fontFamily: 'Lexend Deca, sans-serif',
        fontWeight: 500,
    }

    return (
        <div id="carousel" className="sub-content carousel slide text-white" data-bs-ride='carousel' style={carousel}>
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
            <CarouselButton 
                buttonType='carousel-control-prev'
                buttonIcon='carousel-control-prev-icon'
                dataBsSlide='prev'
                dataBsTarget='#carousel'
                text='Previous'
            />
            <CarouselButton 
                buttonType='carousel-control-next'
                buttonIcon='carousel-control-next-icon'
                dataBsSlide='next'
                dataBsTarget='#carousel'
                text='Next'
            />
        </div>
    )
}