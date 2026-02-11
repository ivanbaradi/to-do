export default function({buttonColor, text, func, ...props}){

    return (
        <div className='btn-group col-4' style={{width: props.width}}>
            <button style={{fontSize: '15px'}} className={`btn ${buttonColor}`} onClick={func}>{text}</button>
        </div>
    )
}