/**
 * Sets an input whenever it currently gets typed
 * @param {React.ChangeEvent<HTMLInputElement>} event - triggered to set text
 * @param {number} charLimit - character limit of an input
 * @param {React.Dispatch<React.SetStateAction<string>>} setText - input's setState
 */
export function setInput(event, charLimit, setText){
    const {value} = event.target
    setText(value.length > charLimit ? value.slice(0, charLimit) : value)
}

/**
 * Clears an input
 * @param {React.Dispatch<React.SetStateAction<string>>} setText - input's setState
 */
export function clearInput(setText){
    setText('')
}


/**
 * Finalizes an input by trimming leading and trailing spaces
 * @param {string} text - input to trim
 * @returns {string} trimmed input
 */
export function finalizeInput(text){
    return text.trim()
}