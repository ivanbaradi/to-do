import TextField from '../components/form/TextField'
import FormButton from '../components/form/FormButton'
import { useState } from "react"

export default function AddItem({setToDoList}){

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    // max input character limits
    const titleCharLimit = 20
    const descCharLimit = 150

    /**
     * Adds new item to the To Do List
     */
    function addItem(){

        if(title.length === 0){
            alert('Enter title')
            return
        }

        const date = new Date()
        const locale = 'en-US'

        setToDoList(prevItems => [
            ...prevItems, 
            {
                title, 
                desc, 
                dateAdded: date.toLocaleDateString(locale, {year: 'numeric', month: 'long', day: 'numeric'}),
                timeAdded: date.toLocaleTimeString(locale, {hour: '2-digit', minute: '2-digit'}),
                checked: false
            }
        ])

        clearInputs()
    }

    /**
     * Clears inputs
     */
    function clearInputs(){
        setTitle('')
        setDesc('')
    }

    /**
     * Handles input change
     * @param {string} value input value
     * @param {} setValue setState of the input value
     */
    function handleChange(value, setValue){
        setValue(value)
    }

    /**
     * Handles key presses
     * @param {event} event 
     */
    function keyPressed(event){
        
        const {name} = event.target
        const {key} = event

        if(key === 'Backspace')
            return
        
        if((name === 'title' && title.length >= titleCharLimit) || (name === 'desc' && desc.length >= descCharLimit))
            event.preventDefault()
    }

    const input = {
        fontWeight: 300
    }

    const buttonList = {
        // width: '50%', 
        // margin: '0 auto'
    }

    return (
        <form>
            <TextField 
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
                    onChange={event => handleChange(event.target.value, setTitle)} 
                    onKeyDown={keyPressed}
                    placeholder="Enter title"
                    required={true}
                />}
            />
            <TextField 
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
                    onChange={event => handleChange(event.target.value, setDesc)}
                    onKeyDown={keyPressed} 
                    placeholder="Enter description (optional)" 
                />}
            />
            <div className="container">
                <div className="row" style={buttonList}>
                    <FormButton 
                        text='Clear'
                        onClickEvent={clearInputs}
                    />
                    <FormButton 
                        text='Submit'
                        onClickEvent={addItem}
                    />
                </div>
            </div>
        </form>
    )
}