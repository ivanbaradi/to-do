import ItemButton from "./ItemButton"
import inputCharLimits from '../../data/inputCharLimits.json'
import { useState, useEffect, useContext } from "react"
import { ListContext } from "../../context/ListContext"
import { setInput } from '../../utils/inputs'
import { useMobile, useTablet, useLaptop } from "../../hooks/media"

export default function Item({id, title, desc, timestamp, checked, ...props}){

    const {saveItem, sortItems} = useContext(ListContext)

    // Character limits for inputs
    const {titleCharLimit, descCharLimit} = inputCharLimits

    // Responsive media
    const onMobile = useMobile()
    const onTablet = useTablet()
    const onLaptop = useLaptop()

    // Edit mode
    const [onEdit, setOnEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const [newDesc, setNewDesc] = useState(desc)
    const [finalTitle, setFinalTitle] = useState(title) // used to invoke function that sort items
    const [finalDesc, setFinalDesc] = useState(desc)

    // Configues edit mode
    function configureOnEdit(){

        if(newTitle.length === 0)
            return

        if(onEdit && (newTitle !== title || newDesc !== desc)){
            saveItem(id, newTitle, newDesc)
            setFinalTitle(newTitle)
            setFinalDesc(newDesc)
        }

        setOnEdit(onEdit ? false : true)
    }

    // Invoked after editing an item
    useEffect(() => {
        const {prop, descending} = props.activeSort
        sortItems(prop, descending)
    }, [finalTitle, finalDesc])

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