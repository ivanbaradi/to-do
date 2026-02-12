import FormTextField from '../components/form/FormTextField'
import FormButton from '../components/form/FormButton'
import inputCharLimits from '../data/inputCharLimits.json'
import { useState } from "react"

export default function AddItem({setList, idCounter, setIdCounter}){

    // title and description for new item
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    // flag for item's empty title
    const [emptyTitle, setEmptyTitle] = useState(null)

    // max input character limits
    const {titleCharLimit, descCharLimit} = inputCharLimits

    /**
     * Adds new item to the To Do List
     */
    function addItem(){

        // Raises error message
        if(title.length === 0){
            setEmptyTitle(true)
            return
        }

        // Timestamp of the new item
        const timestamp = new Date()
        .toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        })
        .replace('at', '')

        setList(prevItems => [
            ...prevItems, 
            {
                id: idCounter,
                title, 
                desc, 
                timestamp,
                checked: false
            }
        ])
        setIdCounter(idCounter+1)
        clearInputs()
    }

    /**
     * Clears inputs
     */
    function clearInputs(){
        setEmptyTitle(null)
        setTitle('')
        setDesc('')
    }

    /**
     * Halts input typing if text length is greater than character limit
     * @param {React.KeyboardEvent<HTMLInputElement>} event - triggered to halt input typing
     * @param {number} charLimit - character limit of an input
     */
    function haltInput(event, charLimit){
        
        const {value} = event.target
        const {key} = event

        if(key === 'Backspace')
            return  

        if(value.length >= charLimit)
            event.preventDefault()
    }

    /**
     * Sets input values from the form
     * @param {React.ChangeEvent<HTMLInputElement>} event - triggered to slice text
     * @param {number} charLimit - character limit of an input
     * @param {React.Dispatch<React.SetStateAction<string>>} setText - setState of an input
     */
    function setInput(event, charLimit, setText){
        const {value} = event.target
        setText(value.length > charLimit ? value.slice(0, charLimit) : value)
    }

    const input = {fontWeight: 300}

    return (
        <form>
            <FormTextField 
                name='title'
                charLimit={titleCharLimit}
                label='Title'
                input={title}
                inputElement={<input 
                    style={input} 
                    name="title" 
                    type="text" 
                    className="form-control" 
                    id='title' 
                    value={title} 
                    onChange={event => setInput(event, titleCharLimit, setTitle)}
                    onKeyDown={event => haltInput(event, titleCharLimit)}
                    placeholder='Enter title'
                />}
                emptyInput={emptyTitle} // indicates required field 
            />
            <FormTextField 
                name='desc'
                charLimit={descCharLimit}
                label='Description'
                input={desc}
                inputElement={<textarea 
                    style={input} 
                    name="desc" 
                    className="form-control" 
                    id="desc" 
                    value={desc} 
                    rows="5" 
                    onChange={event => setInput(event, descCharLimit, setDesc)}
                    onKeyDown={event => haltInput(event, descCharLimit)} 
                    placeholder="Enter description (optional)" 
                />}
            />
            <div className="container">
                <div className="row">
                    <FormButton 
                        text='Clear'
                        onClickEvent={clearInputs}
                        mobileMarginAdjust={true}
                    />
                    <FormButton 
                        text='Add'
                        onClickEvent={addItem}
                        mobileMarginAdjust={false}
                    />
                </div>
            </div>
        </form>
    )
}