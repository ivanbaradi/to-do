import { useMediaQuery } from "react-responsive"

export default function ItemButton({buttonVariant, iconName, text}){

    const onMobile = useMediaQuery({maxWidth: 767})
    const onTablet = useMediaQuery({maxWidth: 991})

    const button = {
        display: 'inline-flex',
        justifyContent: 'center',
        gap: '10px',
        width: '100%',
        margin: !onMobile && iconName === 'delete' && '2px 0', // middle button only
        borderRadius: 0
    }

    const textCSS = {
        marginBottom: 0,
        marginRight: '10px'
    }

    return (
        <div className="col-4 col-md-12">
            <button className={`btn ${buttonVariant}`} style={button}>
                <i className="material-symbols-outlined">{iconName}</i>
                <span style={textCSS}>{text}</span>
            </button>
        </div>
    )
}