export default function ItemButton({buttonColor, iconName, text, func}){

    const button = {
        display: 'inline-flex',
        justifyContent: 'center',
        gap: '10px',
        width: '100%',
        margin: iconName === 'check_box' && '2px 0', // middle button only
        borderRadius: 0
    }

    const textCSS = {
        marginBottom: 0,
        marginRight: '10px'
    }

    return (
        <div className="col-12">
            <button className={`btn ${buttonColor}`} style={button} onClick={func}>
                <i className="material-symbols-outlined">{iconName}</i>
                <span style={textCSS}>{text}</span>
            </button>
        </div>
    )
}