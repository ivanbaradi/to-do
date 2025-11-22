function CarouselSlide({active, desc}){

    const carouselItem = {
        fontSize: '30px',
    }

    const centerText = {
        display: 'grid',
        placeItems: 'center',    
        height: '315px', 
        width: '70%',
        margin: '0 auto'
    }

    return (
        <div className={active ? "carousel-item active" : "carousel-item"} style={carouselItem} data-bs-interval='10000'>
            <div style={centerText}>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default CarouselSlide