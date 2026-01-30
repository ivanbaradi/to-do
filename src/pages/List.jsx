import Item from '../components/item/Item'

export default function List({list, setList}){

    /**
     * Deletes item from the ToDo list
     * @param {number} id target index of the item to delete
     */
    function deleteItem(id){
        setList(() => {return list.filter((_, index) => index !== id)})
    }

    /**
     * Crosses or uncrosses item from the ToDo list
     * @param {number} id target index of the item to cross or uncross
     */
    function crossItem(id){
        setList(prev => {return prev.map((item, index) => {return (index === id) ? {...item, checked: item.checked ? false : true} : item})})
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