import ItemButton from "./ItemButton"

export default function Item({id, title, desc, timestamp, checked, deleteItem, crossItem}){

    const timeStamp = {
        fontSize: '12px', 
        fontWeight: '300',
    }

    const crossItemCSS = {
        textDecoration: checked ? 'line-through' : 'none'
    }

    return (
        
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card">
                <div className="card-body" style={{textAlign: 'left'}}>
                    <h5 className="card-title" style={crossItemCSS}>{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary" style={{...timeStamp, ...crossItemCSS}}>{timestamp}</h6>
                    <p className="card-text" style={{...{fontSize: '14px'}, ...crossItemCSS}}>{desc}</p>
                    <div className="container" style={{padding: 0}}>
                        <div className="row">
                            <ItemButton 
                                buttonVariant='btn-primary'
                                iconName='edit'
                                text='Edit'
                            />
                            <ItemButton 
                                id={id}
                                buttonVariant={checked ? 'btn-secondary' : 'btn-success'}
                                iconName='check_box'
                                text={checked ? 'Uncheck' : 'Check'}
                                func={crossItem}
                            />   
                            <ItemButton 
                                id={id}
                                buttonVariant='btn-danger'
                                iconName='delete'
                                text='Delete'
                                func={deleteItem}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}