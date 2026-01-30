import ItemButton from "./ItemButton"

export default function Item({id, title, desc, timestamp, checked, deleteItem, crossItem}){

    let crossItemCSS = checked ? 'line-through' : 'none' // crosses item if checked

    const cardBody = {
        textAlign: 'left'
    }

    const cardTitle = {
        textDecoration: crossItemCSS
    }

    const cardText = {
        fontSize: '14px',
        textDecoration: crossItemCSS
    }

    const _timestamp = {
        fontSize: '12px', 
        fontWeight: '300',
        textDecoration: crossItemCSS
    }


    return (
        
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card">
                <div className="card-body" style={cardBody}>
                    <h5 className="card-title" style={cardTitle}>{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary" style={_timestamp}>{timestamp}</h6>
                    <p className="card-text" style={cardText}>{desc}</p>
                    <div className="container" style={{padding: 0}}>
                        <div className="row">
                            <ItemButton 
                                buttonVariant='btn-primary'
                                iconName='edit'
                                text='Edit'
                            />
                            <ItemButton 
                                id={id}
                                buttonVariant='btn-danger'
                                iconName='delete'
                                text='Delete'
                                func={deleteItem}
                            />
                            <ItemButton 
                                id={id}
                                buttonVariant={checked ? 'btn-secondary' : 'btn-success'}
                                iconName='check_box'
                                text={!checked ? 'Check' : 'Uncheck'}
                                func={crossItem}
                            />   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}