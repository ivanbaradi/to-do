export default function FormTextField({name, charLimit, label, input, inputElement, emptyInput}){

    const _label = {
        display: 'block',
        textAlign: 'left',
        fontWeight: 500
    }

    const error = {
        textAlign: 'left',
        color: 'red',
        paddingLeft: '5px',
        display: emptyInput ? 'grid' : 'none'
    }

    const _charLimit = {
        textAlign: 'right',
        fontWeight: 200,
        color: input.length >= charLimit ? 'red' : 'black',
        paddingRight: '0'
    }

    return (
        <div>
            <label htmlFor={name} className="form-label" style={_label}>{label}</label>
            {inputElement}
            <div className="container">
                <div className="row">
                    <p className="col" style={error}>Please enter this field.</p>
                    <p className="col" style={_charLimit}>{`${input.length}/${charLimit}`}</p>
                </div>
            </div>
        </div>
    )
}