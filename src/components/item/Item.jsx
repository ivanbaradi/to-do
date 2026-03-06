import ItemButton from "./ItemButton"
import inputCharLimits from '../../data/inputCharLimits.json'
import { useState, useContext, useEffect } from "react"
import { ListContext } from "../../context/ListContext"
import { setInput, finalizeInputs, refurbishInputs, validateInputs } from '../../utils/inputs'
import { useMobile, useTablet, useLaptop, useLargeLaptop } from "../../hooks/mediaQuery"

export default function Item({id, title, desc, timestamp, checked, ...props}){

    // List methods
    const {saveItem, deleteItem, checkItem} = useContext(ListContext)

    // Character limits for inputs
    const {titleCharLimit, descCharLimit} = inputCharLimits

    // Responsive media
    const onMobile = useMobile()
    const onTablet = useTablet()
    const onLaptop = useLaptop()
    const onLargeLaptop = useLargeLaptop()

    // Edit mode
    const [onEdit, setOnEdit] = useState(false)

    const [newTitle, setNewTitle] = useState({
        text: title, // input's text (current input)
        required: true, // flag whether an input is required or not
        finalText: null // final input's text (null = text is to be determined)
    })

    const [newDesc, setNewDesc] = useState({
        text: desc,
        required: false,
        finalText: null
    })

    const inputs = [newTitle, newDesc] // all inputs 
    const setInputs = [setNewTitle, setNewDesc] // all inputs' setStates

    // Deconstructs texts from both titles and descriptions
    const {text: titleText, finalText: titleFinalText} = newTitle
    const {text: descText, finalText: descFinalText} = newDesc

    const timeStamp = {
        fontSize: '12px', 
        fontWeight: '300',
    }

    const crossItem = {
        textDecoration: checked && 'line-through 5px black'
    }

    const marginAdjust = ((onMobile && props.mobileMarginAdjust) || (onTablet && props.tabletMarginAdjust) || (onLaptop && props.laptopMarginAdjust) || (onLargeLaptop && props.largeLaptopMarginAdjust)) && {marginBottom: '25px'}

    /**
     * Configures edit mode
     */
    function configureOnEdit(){

        if(onEdit)
            finalizeInputs(setInputs)

        setOnEdit(onEdit ? false : true)
    }

    // Invoked to finalize inputs and save item from the list
    useEffect(() => {

        if(!validateInputs(inputs))
            return

        if((titleFinalText !== title || descFinalText !== desc))
            saveItem(id, titleFinalText, descFinalText)

        refurbishInputs(setInputs)
        
    }, [titleFinalText, descFinalText])


    return (      
        <div className="col-xl-3 col-lg-4 col-md-6" style={{...marginAdjust}}>
            <div className="card">
                <div className="card-body text-start">
                    
                    {onEdit ?
                        <input name="title" className="card-title" style={{width: '100%'}} value={titleText} onChange={event => setInput(event, titleCharLimit, setNewTitle)}/> : 
                        <h5 className="card-title" style={crossItem}>{titleText}</h5>
                    } 

                    <h6 className="card-subtitle mb-2 text-body-secondary" style={{...timeStamp, ...crossItem}}>{timestamp}</h6>

                    {onEdit ?
                        <textarea name="desc" className="card-text" style={{fontSize: '14px', width: '100%'}} value={descText} onChange={event => setInput(event, descCharLimit, setNewDesc)} /> :
                        <p className="card-text" style={{...{fontSize: '14px'}, ...crossItem}}>{descText}</p>
                    }

                    <div className="container" style={{padding: 0}}>
                        <div className="row">
                            <ItemButton 
                                buttonColor='btn-primary'
                                iconName={onEdit ? 'save' : 'edit'}
                                text={onEdit ? 'Save' : 'Edit'}
                                func={configureOnEdit}
                            />
                            <ItemButton 
                                buttonColor={checked ? 'btn-secondary' : 'btn-success'}
                                iconName={checked ? 'check_box' : 'check_box_outline_blank'}
                                text={checked ? 'Uncheck' : 'Check'}
                                func={() => checkItem(id)}
                            />   
                            <ItemButton 
                                buttonColor='btn-danger'
                                iconName='delete'
                                text='Delete'
                                func={() => deleteItem(id)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}