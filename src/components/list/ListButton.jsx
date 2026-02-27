import { useMobile } from "../../hooks/mediaQuery"

export default function ListButton({buttonColor, header, func, ...props}){

    const onMobile = useMobile()

    return (
        <div className="col" style={{...onMobile && {marginBottom: props.mobileMarginAdjust && '10px'}}}>
            <div className='btn-group' style={{...onMobile && {width: '100%'}}}>
                <button style={{fontSize: '14px'}} className={`btn ${buttonColor}`} onClick={func}>{header}</button>
            </div>
        </div>

    )
}