import FormTextField from '../components/form/FormTextField'
import FormButton from '../components/form/FormButton'
import inputCharLimits from '../data/inputCharLimits.json'
import { useState, useContext } from "react"
import { ListContext } from '../context/ListContext'
import { setInput } from '../utils/inputs'

export default function AddItem(){

    const { addItem } = useContext(ListContext)

    // title and description for new item
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    // flag for item's empty title
    const [emptyTitle, setEmptyTitle] = useState(null)

    // max input character limits
    const {titleCharLimit, descCharLimit} = inputCharLimits

    const input = {fontWeight: 300}

    /**
     * Adds new item to the To Do List
     */
    function submitForm(){

        if(title.length === 0){
            setEmptyTitle(true)
            return
        }

        addItem(title, desc)
        clearForm()
    }

    /**
     * Clears inputs
     */
    function clearForm(){
        setEmptyTitle(null)
        setTitle('')
        setDesc('')
    }

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
                    placeholder="Enter description (optional)" 
                />}
            />
            <div className="container">
                <div className="row">
                    <FormButton 
                        text='Clear'
                        onClickEvent={clearForm}
                        mobileMarginAdjust={true}
                    />
                    <FormButton 
                        text='Add'
                        onClickEvent={submitForm}
                        mobileMarginAdjust={false}
                    />
                </div>
            </div>
        </form>
    )
}