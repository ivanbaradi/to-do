import FormTextField from '../components/form/FormTextField'
import FormButton from '../components/form/FormButton'
import inputCharLimits from '../data/inputCharLimits.json'
import { useState, useContext, useEffect } from "react"
import { ListContext } from '../context/ListContext'
import { clearInputs, finalizeInputs, validateInputs } from '../utils/inputs'

export default function AddItem(){

    const { addItem } = useContext(ListContext)

    const [title, setTitle] = useState({
        text: '', // input's text (current input)
        required: true, // flag whether an input is required or not
        finalText: null // final input's text (null = text is to be determined)
    })

    const [desc, setDesc] = useState({
        text: '',
        required: false,
        finalText: null
    })

    // Deconstructs texts from both titles and descriptions
    const {text: titleText, finalText: titleFinalText, required: titleRequired} = title
    const {text: descText, finalText: descFinalText, required: descRequired} = desc

    // Max input character limits
    const {titleCharLimit, descCharLimit} = inputCharLimits

    const inputs = [title, desc] // all inputs
    const setInputs = [setTitle, setDesc] // all inputs' setStates

    // Invoked to finalize inputs and add item to the list
    useEffect(() => {

        if(!validateInputs(inputs))
            return
        
        addItem(titleFinalText, descFinalText)
        clearInputs(setInputs)    

    }, [titleFinalText, descFinalText])

    return (
        <form>
            <FormTextField 
                name='title'
                charLimit={titleCharLimit}
                label='Title'
                input={titleText}
                type='input'
                setText={setTitle}
                finalInput={titleFinalText}
                required={titleRequired}
            />
            <FormTextField 
                name='desc'
                charLimit={descCharLimit}
                label='Description'
                input={descText}
                type='textbox'
                setText={setDesc}
                finalInput={descFinalText}
                required={descRequired}
            />
            <div className="container">
                <div className="row">
                    <FormButton 
                        text='Clear'
                        onClickEvent={() => clearInputs(setInputs)}
                        mobileMarginAdjust={true}
                    />
                    <FormButton 
                        text='Add'
                        onClickEvent={() => finalizeInputs(setInputs)}
                        mobileMarginAdjust={false}
                    />
                </div>
            </div>
        </form>
    )
}