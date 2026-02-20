/**
 * Sets input values from the form
 * @param {React.ChangeEvent<HTMLInputElement>} event - triggered to set text
 * @param {number} charLimit - character limit of an input
 * @param {React.Dispatch<React.SetStateAction<string>>} setText - setState of an input
 */
export function setInput(event, charLimit, setText){
    const {value} = event.target
    setText(value.length > charLimit ? value.slice(0, charLimit) : value)
}

/**
 * 
 * @param {React.Dispatch<React.SetStateAction<string>>} setText - setState of an input
 */
export function clearInput(setText){
    setText('')
}