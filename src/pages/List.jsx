import Item from '../components/item/Item'

export default function List({list, setList}){

    function deleteItem(id){
        setList(() => {return list.filter((_, index) => index !== id)})
    }

    function crossItem(id){
        
    }

    // Displays error message due to zero items in the list
    if(list.length === 0)
        return <h2 style={{margin: '50px 0'}}>You do not have any items in the list</h2>

    return (
        <main className='sub-content' style={{marginTop: '40px'}}>
            <div className='container'>
                <div className='row'>
                    {list.map(({title, desc, timestamp, checked}, index) => <Item 
                        key={index}
                        id={index}
                        title={title}
                        desc={desc}
                        timestamp={timestamp}
                        checked={checked}
                        deleteItem={deleteItem}
                        crossItem={crossItem}
                    />)}
                </div>
            </div>
        </main>
    )
    
}