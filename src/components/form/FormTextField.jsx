import { setInput } from "../../utils/inputs"

export default function FormTextField({name, charLimit, label, input, type, required, setText, ...props}){

    const inputCSS = {
        border: required && props.finalInput === '' && '2px solid red',
        fontWeight: 300,
    }

    return (
        <div>
            <label htmlFor={name} className="form-label d-block text-start" style={{fontWeight: 500}}>{label}</label>

            {type === 'input' ?
                <input 
                    style={inputCSS} 
                    name="title" 
                    type="text" 
                    className="form-control" 
                    id='title' 
                    value={input} 
                    onChange={event => setInput(event, charLimit, setText)}
                    placeholder='Enter title'
                />
                :
                <textarea 
                    style={inputCSS} 
                    name="desc" 
                    className="form-control" 
                    id="desc" 
                    value={input} 
                    rows="5" 
                    onChange={event => setInput(event, charLimit, setText)}
                    placeholder="Enter description (optional)" 
                />
            }

            <div className="container">
                <div className="row">
                    <p className={`col ${required && props.finalInput === '' ? 'd-grid' : 'd-none'} text-start text-danger`} style={{paddingLeft: '5px'}}>Please enter this field.</p>
                    <p className={`col text-end ${input.length >= charLimit && 'text-danger'}`} style={{fontWeight: 200, paddingRight: 0}}>{`${input.length}/${charLimit}`}</p>
                </div>
            </div>
        </div>
    )
}