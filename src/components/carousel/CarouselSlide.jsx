export default function CarouselSlide({active, desc}){

    const _desc = {
        placeItems: 'center',    
        height: '300px', 
        width: '70%',
        margin: '0 auto'
    }

    return (
        <div className={active ? "carousel-item active" : "carousel-item"} style={{fontSize: '30px'}} data-bs-interval='10000'>
            <div className="d-grid" style={_desc}>{desc}</div>
        </div>
    )
}