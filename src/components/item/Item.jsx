import ItemButton from "./ItemButton"

export default function Item({title, desc, timestamp, checked}){

    const cardBody = {
        textAlign: 'left'
    }

    const _timestamp = {
        fontSize: '12px', 
        fontWeight: '300'
    }

    return (
        
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card">
                <div className="card-body" style={{...cardBody, ...checked && {textDecoration: 'line-through'}}}>
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary" style={_timestamp}>{timestamp}</h6>
                    <p className="card-text" style={{fontSize: '14px'}}>{desc}</p>
                    <div className="container" style={{padding: 0}}>
                        <div className="row">
                            <ItemButton 
                                buttonVariant='btn-primary'
                                iconName='edit'
                                text='Edit'
                            />
                            <ItemButton 
                                buttonVariant='btn-danger'
                                iconName='delete'
                                text='Delete'
                            />
                            <ItemButton 
                                buttonVariant={checked ? 'btn-secondary' : 'btn-success'}
                                iconName='check_box'
                                text='Check'
                            />   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}