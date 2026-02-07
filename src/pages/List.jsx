import Item from '../components/item/Item'
import Dropdown from '../components/Dropdown'
import { useState, useEffect } from 'react'

export default function List({list, setList}){

    const [activeSort, setActiveSort] = useState({prop: null, descending: null})
    const [activeFilter, setActiveFilter] = useState(null)
    const {prop, descending} = activeSort

    /**
     * Deletes item from the ToDo list
     * @param {number} tempId target index of the item to delete
     */
    function deleteItem(tempId){
        setList(() => list.filter(({id}) => id !== tempId))
    }

    /**
     * Checks item from the ToDo list by crossing its details
     * @param {number} tempId target index of the item to check
     */
    function checkItem(tempId){
        setList(prev => prev.map(item => (item.id === tempId) ? {...item, checked: item.checked ? false : true} : item))
    }

    /**
     * Changes active sort after configuring sort settings
     * @param {object} tempProps  temporary object with props to configure a sorting list
     */
    function changeActiveSort(tempProps){
        const {tempProp, tempDescending} = tempProps
        setActiveSort(prev => {
            
            // Changes active sort based on updated property
            if(tempProp !== undefined){
                const updatedProp = {...prev, prop: tempProp} 
                if(descending === null) // executes if sort options changed for the first time (ascending order by default)
                    return {...updatedProp, descending: false}
                return updatedProp
            } 

            // Changes active sort based on updated sorting
            return {...prev, descending: tempDescending}
        })
    }

    /**
     * Filters items based on prop
     * @param {boolean} prop prop of items to only include
     */
    function changeActiveFilter(prop){
        setActiveFilter(prev => prev === prop ? null : prop)
    }

    // Sorts items after all sorting options are configured
    useEffect(() => setList(() => list.toSorted((a, b) => {
        
        if(prop === null && descending === null)
            return 
        
        return descending ? b[prop].localeCompare(a[prop], undefined, {sensivity: 'base'}) : a[prop].localeCompare(b[prop], undefined, {sensivity: 'base'})
    })), [activeSort])

    // Displays error message due to zero items in the list
    if(list.length === 0)
        return <h2 style={{margin: '50px 0'}}>You do not have any items in the list</h2>

    return (
        <main className='sub-content' style={{marginTop: '40px'}}>
            
            <div className='container' style={{marginBottom: '20px'}}>
                <div className='row'>
                    <Dropdown 
                        header='Sort'
                        optionGroups={[
                            {
                                subheader: 'Type',
                                options: [
                                    {
                                        option: 'Title', // name of the option
                                        activeComparison: prop === 'title' && 'active', // comparison to for styling option
                                        optionFunc: () => changeActiveSort({tempProp: 'title'}) // function associated with option
                                    },
                                    {
                                        option: 'Date Added',
                                        activeComparison: prop === 'timestamp' && 'active',
                                        optionFunc: () => changeActiveSort({tempProp: 'timestamp'})
                                    }
                                ]
                            },
                            {
                                subheader: 'Order',
                                options: [
                                    {
                                        option: 'Ascending',
                                        activeComparison: descending === null ? 'disabled' : !descending && 'active',
                                        optionFunc: () => changeActiveSort({tempDescending: false})
                                    },
                                    {
                                        option: 'Descending',    
                                        activeComparison: descending === null ? 'disabled' : descending && 'active',
                                        optionFunc: () => changeActiveSort({tempDescending: true})
                                    }   
                                ]
                            }
                        ]}
                    />

                    <Dropdown 
                        header='Filter'
                        optionGroups={[
                            {
                                // subheader: 'Checked Items',
                                options: [
                                    {
                                        option: 'Checked',
                                        activeComparison: activeFilter === 'checked' && 'active',
                                        optionFunc: () => changeActiveFilter('checked')
                                    },
                                    {
                                        option: 'Unchecked',
                                        activeComparison: activeFilter === 'unchecked' && 'active',
                                        optionFunc: () => changeActiveFilter('unchecked')
                                    }
                                ]
                            }
                        ]}                    
                    />
                </div>
            </div>
            
            <div className='container'>
                <div className='row'>
                    {
                        list.map(({id, title, desc, timestamp, checked}) => 
                            <Item 
                                key={id}
                                id={id}
                                title={title}
                                desc={desc}
                                timestamp={timestamp}
                                checked={checked}
                                deleteItem={deleteItem}
                                checkItem={checkItem}
                            />
                        )
                    }
                </div>
            </div>
        </main>
    )
    
}