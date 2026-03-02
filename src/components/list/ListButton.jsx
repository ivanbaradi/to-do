import { useMobile } from "../../hooks/mediaQuery"

export default function ListButton({buttonColor, header, func, ...props}){

    const onMobile = useMobile()

    const mobileCSS = {
        marginBottom: props.mobileMarginAdjust && '25px',
        width: props.fullWidth && '100%'
    }

    return (
        <div className="col" style={{...onMobile && mobileCSS}}>
            <div className='btn-group' style={{...onMobile && {width: '100%'}}}>
                <button style={{fontSize: '14px'}} className={`btn ${buttonColor}`} onClick={func}>{header}</button>
            </div>
        </div>
    )
}