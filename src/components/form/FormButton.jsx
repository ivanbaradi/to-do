import { useMediaQuery } from "react-responsive"
export default function FormButton({text, onClickEvent, ...props}){

    const onMobile = useMediaQuery({maxWidth: 767})
    
    return (
        <div className="col-md-6" style={{marginBottom: onMobile && props.mobileMarginAdjust && '20px'}}>
            <input 
                className="btn btn-dark"
                type="button" 
                style={{padding: '5px 20px'}} 
                onClick={() => onClickEvent()} 
                value={text}
            />
        </div>
    )
}