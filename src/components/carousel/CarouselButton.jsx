export default function CarouselButton({buttonType, buttonIcon, dataBsSlide, dataBsTarget, text}){
    return (
        <button className={buttonType} type="button" data-bs-target={dataBsTarget} data-bs-slide={dataBsSlide}>
            <span className={buttonIcon} aria-hidden="true"></span>
            <span className="visually-hidden">{text}</span>
        </button>
    )
}