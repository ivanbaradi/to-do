import ItemButton from "./ItemButton"
import inputCharLimits from '../../data/inputCharLimits.json'
import { useState, useContext } from "react"
import { ListContext } from "../../context/ListContext"
import { setInput, finalizeInput } from '../../utils/inputs'
import { useMobile, useTablet, useLaptop, useLargeLaptop } from "../../hooks/mediaQuery"

export default function Item({id, title, desc, timestamp, checked, ...props}){

    const {saveItem, deleteItem, checkItem,} = useContext(ListContext)

    // Character limits for inputs
    const {titleCharLimit, descCharLimit} = inputCharLimits

    // Responsive media
    const onMobile = useMobile()
    const onTablet = useTablet()
    const onLaptop = useLaptop()
    const onLargeLaptop = useLargeLaptop()

    // Edit mode
    const [onEdit, setOnEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const [newDesc, setNewDesc] = useState(desc)

    /**
     * Configures edit mode
     */
    function configureOnEdit(){

        const finalTitle = finalizeInput(newTitle)
        const finalDesc = finalizeInput(newDesc)

        if(finalTitle.length === 0)
            return

        if(finalTitle !== title || finalDesc !== desc)
            saveItem(id, finalTitle, finalDesc)

        // Must finalize title and description the next time edit mode is on
        setNewTitle(finalTitle)
        setNewDesc(finalDesc)

        setOnEdit(onEdit ? false : true)
    }

    const timeStamp = {
        fontSize: '12px', 
        fontWeight: '300',
    }

    const crossItem = {
        textDecoration: checked && 'line-through 5px black'
    }

    const marginAdjust = onMobile ? props.mobileMarginAdjust && {marginBottom: '40px'} : 
    ((onTablet && props.tabletMarginAdjust) || (onLaptop && props.laptopMarginAdjust) || (onLargeLaptop && props.largeLaptopMarginAdjust)) && {marginBottom: '25px'}

    return (
        
        <div className="col-xl-3 col-lg-4 col-md-6" style={{...marginAdjust}}>
            <div className="card">
                <div className="card-body" style={{textAlign: 'left'}}>
                    
                    {onEdit ?
                        <input name="title" className="card-title" style={{width: '100%'}} value={newTitle} onChange={event => setInput(event, titleCharLimit, setNewTitle)}/> : 
                        <h5 className="card-title" style={crossItem}>{newTitle}</h5>
                    } 

                    <h6 className="card-subtitle mb-2 text-body-secondary" style={{...timeStamp, ...crossItem}}>{timestamp}</h6>

                    {onEdit ?
                        <textarea name="desc" className="card-text" style={{fontSize: '14px', width: '100%'}} value={newDesc} onChange={event => setInput(event, descCharLimit, setNewDesc)} /> :
                        <p className="card-text" style={{...{fontSize: '14px'}, ...crossItem}}>{newDesc}</p>
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