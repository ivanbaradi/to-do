export default function TextField({name, charLimit, label, input, inputElement}){

    const _label = {
        display: 'block',
        textAlign: 'left',
        fontWeight: 500
    }

    const _charLimit = {
        textAlign: 'right',
        fontWeight: 200,
        color: input.length >= charLimit ? 'red' : 'black'
    }

    return (
        <div>
            <label htmlFor={name} className="form-label" style={_label}>{label}</label>
            {inputElement}
            <p style={_charLimit}>{`${input.length}/${charLimit}`}</p>
        </div>
    )
}