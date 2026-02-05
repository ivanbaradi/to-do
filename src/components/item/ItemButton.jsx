import { useMediaQuery } from "react-responsive"

export default function ItemButton({buttonVariant, iconName, text, func, id}){

    const onMobile = useMediaQuery({maxWidth: 767})

    const button = {
        display: 'inline-flex',
        justifyContent: 'center',
        gap: '10px',
        width: '100%',
        margin: !onMobile && iconName === 'check_box' && '2px 0', // middle button only
        borderRadius: 0
    }

    const textCSS = {
        marginBottom: 0,
        marginRight: '10px'
    }

    return (
        <div className="col-4 col-md-12">
            <button className={`btn ${buttonVariant}`} style={button} onClick={() => {if(func !== undefined){func(id)}}}>
                <i className="material-symbols-outlined">{iconName}</i>
                <span style={textCSS}>{text}</span>
            </button>
        </div>
    )
}