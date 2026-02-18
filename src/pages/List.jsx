import Item from '../components/item/Item'
import ListButton from '../components/list/ListButton'
import ListDropdown from '../components/list/ListDropdown'
import { useState, useEffect } from 'react'

export default function List({list, setList}){

    // Configures active property and order for sorting items
    const [activeSort, setActiveSort] = useState({prop: null, descending: null})
    const {prop, descending} = activeSort
    // Configures active filter for filtering items
    const [activeFilter, setActiveFilter] = useState(null)

    /**
     * Deletes item from the ToDo list
     * @param {number} tempId target index of the item to delete
     */
    function deleteItem(tempId){
        setList(list.filter(({id}) => id !== tempId))
    }

    /** Deletes all checked items */
    function deleteCheckedItems(){
        setList(list.filter(({checked}) => !checked))
    }

    /**
     * Checks item from the ToDo list by crossing its details
     * @param {number} tempId target index of the item to check
     */
    function checkItem(tempId){
        setList(prev => prev.map(item => (item.id === tempId) ? {...item, checked: item.checked ? false : true} : item))
    }

    /**
     * Changes active sort based on specific property and order
     * @param {object} tempProps  temporary object with props to configure a sorting list
     */
    function changeActiveSort(tempProps){
        const {tempProp, tempDescending} = tempProps
        setActiveSort(prev => {
            
            // Changes active sort based on updated property
            if(tempProp !== undefined){
                const newActiveSort = {...prev, prop: tempProp} 
                return descending !== null ? newActiveSort : {...newActiveSort, descending: false} // ascending order is defaulted
            } 

            // Changes active sort based on updated sorting
            return {...prev, descending: tempDescending}
        })
    }

    /**
     * Changes active filter based on specific property
     * @param {boolean} prop prop of items to only include
     */
    function changeActiveFilter(prop){
        setActiveFilter(prev => prev === prop ? null : prop)
    }

    // Sorts items after all sorting options are configured
    useEffect(() => setList(() => list.toSorted((a, b) => {
        
        if(prop === null && descending === null)
            return 

        const options = {sensivity: 'base', numeric: true}
        
        return descending ? b[prop].localeCompare(a[prop], undefined, options) : a[prop].localeCompare(b[prop], undefined, options)
    })), [activeSort])

    // Filters items after filter option is configured (checked option only)
    const filteredList = list.filter(({checked}) => activeFilter === 'checked' ? checked : !checked)
    // List that gets displayed on the web page 
    const listUI = (activeFilter !== null) ? filteredList : list
    const n = listUI.length

    // Displays error message due to zero items in the list
    if(list.length === 0)
        return <h2 style={{margin: '50px 0'}}>There are no items in the list.</h2>

    return (
        <main className='sub-content' style={{marginTop: '40px'}}>
            <div className='container' style={{marginBottom: '20px'}}>
                <div className='row'>
                    <ListDropdown 
                        header='Sort'
                        optionGroups={[
                            {
                                subheader: 'Type', // subheader is optional (no need to include this prop)
                                options: [ // list of options per each option group
                                    {
                                        option: 'Title', // name of the option
                                        activeComparison: prop === 'title' && 'active', // comparison for highlight active option
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
                        mobileMarginAdjust={true}
                    />

                    <ListDropdown 
                        header='Filter'
                        optionGroups={[
                            {
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
                        mobileMarginAdjust={true}                 
                    />
                    <ListButton
                        buttonColor='btn-danger'
                        text='Delete All Checked'
                        func={deleteCheckedItems}
                        width='200px' 
                        mobileMarginAdjust={false}
                    />
                </div>
            </div>
            <div>
            {
                (listUI.length === 0) 
                ?
                <h2 style={{margin: '50px 0'}}>No results found.</h2>
                :
                <div className='container'>
                    <div className='row'>
                        {
                            listUI.map(({id, title, desc, timestamp, checked}, i) => 
                                <Item 
                                    key={id}
                                    id={id}
                                    title={title}
                                    desc={desc}
                                    timestamp={timestamp}
                                    checked={checked}
                                    deleteItem={() => deleteItem(id)}
                                    checkItem={() => checkItem(id)}
                                    mobileMarginAdjust={i < n-1}
                                    tabletMarginAdjust={i < n-2}
                                    laptopMarginAdjust={i < n-3}
                                    setList={setList}
                                />
                            )
                        }
                    </div>
                </div>
            }
            </div> 
        </main>
    ) 
}