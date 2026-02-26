import { useMobile } from "../../hooks/mediaQuery"

export default function ListButton({buttonColor, header, func, ...props}){

    const onMobile = useMobile()

    const mobileQuery = {
        textAlign: 'left',
        marginBottom: props.mobileMarginAdjust && '10px'
    }    

    const featureQuery = onMobile && mobileQuery

    return (
        <div className="col-md-3" style={{...featureQuery}}>
            <div className='btn-group' style={{...onMobile && {width: '100%'}}}>
                <button style={{fontSize: '14px'}} className={`btn ${buttonColor}`} onClick={func}>{header}</button>
            </div>
        </div>

    )
}