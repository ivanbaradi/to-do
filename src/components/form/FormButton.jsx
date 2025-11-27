export default function FormButton({text, onClickEvent}){
    
    return (
        <div className="col-6">
            <button 
                className="btn btn-dark" 
                style={{padding: '5px 20px'}} 
                onClick={event => {
                    event.preventDefault()
                    onClickEvent()
            }}>{text}</button>
        </div>
    )
}