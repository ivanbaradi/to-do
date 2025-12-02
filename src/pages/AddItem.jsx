import TextField from '../components/form/TextField'
import FormButton from '../components/form/FormButton'
import { useState } from "react"

export default function AddItem({setList}){

    // title and description for new item
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    // flag for item's empty title
    const [emptyTitle, setEmptyTitle] = useState(null)

    // max input character limits
    const titleCharLimit = 20
    const descCharLimit = 150

    /**
     * Adds new item to the To Do List
     */
    function addItem(){

        if(title.length === 0){
            setEmptyTitle(true)
            return
        }

        const date = new Date()
        const locale = 'en-US'

        setList(prevItems => [
            ...prevItems, 
            {
                title, 
                desc, 
                dateModified: date.toLocaleDateString(locale, {year: 'numeric', month: 'long', day: 'numeric'}),
                timeModified: date.toLocaleTimeString(locale, {hour: '2-digit', minute: '2-digit'}),
                checked: false
            }
        ])

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
     * Handles key presses
     * @param {React.KeyboardEvent<HTMLInputElement>} event key button associated with the event
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
                    onChange={event => setTitle(event.target.value)}
                    onKeyDown={keyPressed}
                    placeholder='Enter title'
                />}
                emptyInput={emptyTitle} // indicates required field 
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
                    onChange={event => setDesc(event.target.value)}
                    onKeyDown={keyPressed} 
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