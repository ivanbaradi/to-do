import { useMobile } from "../../hooks/mediaQuery"

export default function ItemButton({buttonColor, iconName, text, func}){

    const onMobile = useMobile()

    const button = {
        display: 'inline-flex',
        justifyContent: 'center',
        gap: '10px',
        width: '100%',
        borderRadius: 0
    }

    const textCSS = {
        marginBottom: 0,
        marginRight: '10px'
    }

    const middleButton = (iconName === 'check_box' || iconName === 'check_box_outline_blank') && !onMobile && {margin: '2px 0'} // CSS for middle button only

    return (
        <div className="col-4 col-md-12" style={{...onMobile && {padding: '0 10px'}}}>
            <button className={`btn ${buttonColor}`} style={{...button, ...middleButton}} onClick={func}>
                <i className="material-symbols-outlined">{iconName}</i>
                {!onMobile && <span style={textCSS}>{text}</span>}
            </button>
        </div>
    )
}