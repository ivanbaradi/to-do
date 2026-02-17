import { useMediaQuery } from "react-responsive"

export default function ListButton({buttonColor, text, func, ...props}){

    const onMobile = useMediaQuery({maxWidth: 767})

    const mobileQuery = {
        textAlign: 'left',
        marginBottom: props.mobileMarginAdjust && '10px'
    }

    const featureQuery = onMobile && mobileQuery

    return (
        <div className="col-md-4" style={{...featureQuery}}>
            <div className='btn-group' style={{width: props.width}}>
                <button style={{fontSize: '15px'}} className={`btn ${buttonColor}`} onClick={func}>{text}</button>
            </div>
        </div>

    )
}