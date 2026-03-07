/**
 * Configures an option to become active
 * @param {string} option - option to make it active (key)
 * @param {string | boolean} newValue - option's new value to make it active (value)
 * @param {React.Dispatch<React.SetStateAction<object>>} setActiveOption - option's setState 
 */
export function changeActiveOption(option, newValue, setActiveOption){
    
    setActiveOption(prev => {

        const prevValue = prev[option] // previous value of a specific option
        const updatedOptions = {...prev, [option]: newValue === prevValue ? null : newValue} // configuring option with new value

        // SORT OPTIONS GROUP
        if(prev.activePropSort !== undefined && prev.descending !== undefined){

            // CASE 1: None of the sorting options are active => ascending order will be active by default
            if(prev.descending === null)
                return {...updatedOptions, descending: false}

            // CASE 2: Active sorting option is clicked => all sorting options will be inactive
            if(prevValue === newValue)
                return Object.fromEntries(Object.keys(prev).map(key => [key, null]))
        }
        
        return updatedOptions
    })
}

/**
 * Clears all options from a specified option group
 * @param {React.Dispatch<React.SetStateAction<object>>} setOptionGroup - setState associated with a specified option group
 */
export function clearOptionGroup(setOptionGroup){
    setOptionGroup(prev => Object.fromEntries(Object.keys(prev).map(key => [key, null])))
}

/**
 * Clears all options from all option groups
 * @param {React.Dispatch<React.SetStateAction<object>>[]} setOptionGroups - list of option groups' setStates
 */
export function clearOptionGroups(setOptionGroups){
    setOptionGroups.forEach(setOptionGroup => clearOptionGroup(setOptionGroup))
}