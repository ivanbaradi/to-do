/**
 * Sets an input whenever it currently gets typed. Must set `finalText = null`
 * since text has now changed and needs to be finalized again
 * @param {React.ChangeEvent<HTMLInputElement>} event - triggered to set text
 * @param {number} charLimit - character limit of an input
 * @param {React.Dispatch<React.SetStateAction<object>>} setText - input's setState
 */
export function setInput(event, charLimit, setText){
    const {value} = event.target
    setText(prev => ({...prev, finalText: null, text: value.length > charLimit ? value.slice(0, charLimit) : value}))
}

/**
 * Clears all inputs
 * @param {React.Dispatch<React.SetStateAction<object>>[]} setTexts - list of inputs' setStates
 */
export function clearInputs(setTexts){
    setTexts.forEach(setText => setText(prev => ({...prev, text: ''})))
}

/**
 * Finalizes all inputs 
 * @param {React.Dispatch<React.SetStateAction<object>>[]} setTexts - list of inputs' setStates
 */
export function finalizeInputs(setTexts){

    /**
     * Finalizes an input by trimming leading and trailing spaces
     * @param {string} text - input to trim
     * @returns {string} trimmed input
     */
    function trimInput(text){
        return text.trim()
    }

    setTexts.forEach(setText => setText(prev => ({...prev, finalText: trimInput(prev.text)})))
}

/**
 * Keeps inputs up to date with finalized texts
 * @param {React.Dispatch<React.SetStateAction<object>>[]} setTexts - list of inputs' setStates
 */
export function refurbishInputs(setTexts){
    setTexts.forEach(setText => setText(prev => ({...prev, text: prev.finalText})))   
}

/**
 * Determines whether inputs are valid or not
 * @param {object[]} inputs - list of inputs
 * @returns {boolean} returns true if all inputs are valid
 */
export function validateInputs(inputs){
    
    // Failed due to having undetermined input(s)
    if(inputs.some(({finalText}) => finalText === null))
        return false

    // Failed due to empty required input(s)
    if(inputs.some(({required, finalText}) => required && finalText === ''))
        return false

    return true
}