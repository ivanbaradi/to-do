export default function FormTextField({name, charLimit, label, input, inputElement, ...props}){

    return (
        <div>
            <label htmlFor={name} className="form-label d-block text-start" style={{fontWeight: 500}}>{label}</label>
            {inputElement}
            <div className="container">
                <div className="row">
                    <p className={`col ${props.emptyInput ? 'd-grid' : 'd-none'} text-start text-danger`} style={{paddingLeft: '5px'}}>Please enter this field.</p>
                    <p className={`col text-end ${input.length >= charLimit && 'text-danger'}`} style={{fontWeight: 200, paddingRight: 0}}>{`${input.length}/${charLimit}`}</p>
                </div>
            </div>
        </div>
    )
}