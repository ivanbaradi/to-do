import ItemButton from "./ItemButton"

export default function Item({id, title, desc, timestamp, checked, ...props}){

    const timeStamp = {
        fontSize: '12px', 
        fontWeight: '300',
    }

    const crossItem = {
        textDecoration: checked ? 'line-through 5px black' : 'none'
    }

    return (
        
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card">
                <div className="card-body" style={{textAlign: 'left'}}>
                    <h5 className="card-title" style={crossItem}>{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary" style={{...timeStamp, ...crossItem}}>{timestamp}</h6>
                    <p className="card-text" style={{...{fontSize: '14px'}, ...crossItem}}>{desc}</p>
                    <div className="container" style={{padding: 0}}>
                        <div className="row">
                            <ItemButton 
                                buttonColor='btn-primary'
                                iconName='edit'
                                text='Edit'
                            />
                            <ItemButton 
                                id={id}
                                buttonColor={checked ? 'btn-secondary' : 'btn-success'}
                                iconName='check_box'
                                text={checked ? 'Uncheck' : 'Check'}
                                func={props.checkItem}
                            />   
                            <ItemButton 
                                id={id}
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