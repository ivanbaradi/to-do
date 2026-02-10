export default function({buttonColor, text, func, ...props}){

    const button = {
        fontSize: '15px',
    }


    return (
        <div className='btn-group col-4'>
            <button style={button} className={`btn ${buttonColor}`} onClick={func}>{text}</button>
        </div>
    )
}