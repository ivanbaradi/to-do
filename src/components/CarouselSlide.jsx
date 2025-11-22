function CarouselSlide({active, desc}){

    const carouselItem = {
        fontSize: '30px',
    }

    const centerText = {
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',    
        height: '315px', 
    }

    return (
        <div className={active ? "carousel-item active" : "carousel-item"} style={carouselItem}>
            <div style={centerText}>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default CarouselSlide