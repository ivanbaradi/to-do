import ItemButton from "./ItemButton"
import inputCharLimits from '../../data/inputCharLimits.json'
import { useMediaQuery } from "react-responsive"
import { useState, useEffect } from "react"

export default function Item({id, title, desc, timestamp, checked, ...props}){

    // Character limits for inputs
    const {titleCharLimit, descCharLimit} = inputCharLimits

    // Responsive media
    const onMobile = useMediaQuery({maxWidth: 767})
    const onTablet = useMediaQuery({maxWidth: 991})
    const onLaptop = useMediaQuery({maxWidth: 1199})

    // Edit mode
    const [onEdit, setOnEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const [newDesc, setNewDesc] = useState(desc)
    const [finalTitle, setFinalTitle] = useState(title) // used to invoke function that sort items

    /**
     * Sets input values from the item
     * @param {React.ChangeEvent<HTMLInputElement>} event - triggered to set text
     * @param {number} charLimit - character limit of an input
     * @param {React.Dispatch<React.SetStateAction<string>>} setText - setState of an input
     */
    function setInput(event, charLimit, setText){
        const {value} = event.target
        setText(value.length > charLimit ? value.slice(0, charLimit) : value)
    }

    // Saves item after editing mode is complete
    function saveItem(){
        
        const timestamp = new Date()
        .toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        })
        .replace('at', '')

        props.setList(prevList => prevList.map(item => (item.id === id) ? 
        {...item, 
            title: newTitle, 
            timestamp,
            desc: newDesc, 
        } : item ))

        setFinalTitle(newTitle)
    }

    // Configues edit mode
    function configureOnEdit(){

        if(newTitle.length === 0)
            return

        if(onEdit && (newTitle !== title || newDesc !== desc))
            saveItem()

        setOnEdit(onEdit ? false : true)
    }

    // Invoked after editing an item
    useEffect(props.sortItems, [finalTitle])

    const timeStamp = {
        fontSize: '12px', 
        fontWeight: '300',
    }

    const crossItem = {
        textDecoration: checked ? 'line-through 5px black' : 'none'
    }

    const marginAdjust = onMobile ? props.mobileMarginAdjust && {marginBottom: '40px'} : 
    onTablet ? props.tabletMarginAdjust && {marginBottom: '25px'} : 
    onLaptop ? props.laptopMarginAdjust && {marginBottom: '25px'} :
    {marginBottom: '25px'} // for way bigger devices

    return (
        
        <div className="col-xl-3 col-lg-4 col-md-6" style={{...marginAdjust}}>
            <div className="card">
                <div className="card-body" style={{textAlign: 'left'}}>
                    
                    {onEdit ?
                        <input className="card-title" value={newTitle} onChange={event => setInput(event, titleCharLimit, setNewTitle)}/> : 
                        <h5 className="card-title" style={crossItem}>{newTitle}</h5>
                    } 

                    <h6 className="card-subtitle mb-2 text-body-secondary" style={{...timeStamp, ...crossItem}}>{timestamp}</h6>

                    {onEdit ?
                        <textarea className="card-text" style={{fontSize: '14px'}} value={newDesc} cols="31" onChange={event => setInput(event, descCharLimit, setNewDesc)} /> :
                        <p className="card-text" style={{...{fontSize: '14px'}, ...crossItem}}>{newDesc}</p>
                    }

                    <div className="container" style={{padding: 0}}>
                        <div className="row">
                            <ItemButton 
                                buttonColor='btn-primary'
                                iconName='edit'
                                text={onEdit ? 'Save' : 'Edit'}
                                func={configureOnEdit}
                            />
                            <ItemButton 
                                buttonColor={checked ? 'btn-secondary' : 'btn-success'}
                                iconName='check_box'
                                text={checked ? 'Uncheck' : 'Check'}
                                func={props.checkItem}
                            />   
                            <ItemButton 
                                buttonColor='btn-danger'
                                iconName='delete'
                                text='Delete'
                                func={props.deleteItem}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}