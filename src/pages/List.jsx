import Item from '../components/item/Item'
import ListButton from '../components/list/ListButton'
import ListDropdown from '../components/list/ListDropdown'
import { useState, useEffect, useContext } from 'react'
import { ListContext } from '../context/ListContext'

export default function List(){

    // Imports some assets from ListContext
    const {list, deleteItem, checkItem, deleteCheckedItems, sortItems, filterItems} = useContext(ListContext)

    // Configures active property and order for sorting items
    const [activeSort, setActiveSort] = useState({
        activePropSort: null, 
        descending: null}
    )

    const {activePropSort, descending} = activeSort
    
    // Configures active filters for filtering items
    const [activeFilters, setActiveFilters] = useState({
        checkedFilter: null, 
        dateActionFilter: null}
    )

    const {checkedFilter, dateActionFilter} = activeFilters
    
    // List that gets displayed on the web page based on filters
    const listUI = filterItems(activeFilters)
    const n = listUI.length

    /**
     * Changes active sort based on specific property and order
     * @param {object} tempProps - temporary object with props to configure a sorting list
     */
    function changeActiveSort(tempProps){
        const {tempProp, tempDescending} = tempProps
        setActiveSort(prev => {
            
            // Changes active sort based on updated property
            if(tempProp !== undefined){
                const newActiveSort = {...prev, activePropSort: tempProp} 
                return descending !== null ? newActiveSort : {...newActiveSort, descending: false} // ascending order is defaulted
            } 

            // Changes active sort based on updated sorting
            return {...prev, descending: tempDescending}
        })
    }

    /**
     * Changes active filter based on specific property
     * @param {object} tempFilters - temporary object of filter options
     */
    function changeActiveFilter(tempFilters){

        const {tempCheckedFilter, tempDateActionFilter} = tempFilters

        setActiveFilters(prev => {
            if(tempCheckedFilter !== undefined)
                return {...prev, checkedFilter: checkedFilter === tempCheckedFilter ? null : tempCheckedFilter}
            else
                return {...prev, dateActionFilter: dateActionFilter === tempDateActionFilter ? null : tempDateActionFilter}
        })
    }

    // Invoked after configuring sort options
    useEffect(() => sortItems(activePropSort, descending), [activeSort])

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
                                subheader: 'Type', // subheader is optional (no need to include this property)
                                options: [ // list of options per each option group
                                    {
                                        option: 'Title', // name of the option
                                        activeComparison: activePropSort === 'title' && 'active', // comparison for highlight active option
                                        optionFunc: () => changeActiveSort({tempProp: 'title'}) // function associated with option
                                    },
                                    {
                                        option: 'Date',
                                        activeComparison: activePropSort === 'time' && 'active',
                                        optionFunc: () => changeActiveSort({tempProp: 'time'})
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
                                subheader: 'Checked',
                                options: [
                                    {
                                        option: 'Checked',
                                        activeComparison: checkedFilter === 'checked' && 'active',
                                        optionFunc: () => changeActiveFilter({tempCheckedFilter: 'checked'})
                                    },
                                    {
                                        option: 'Unchecked',
                                        activeComparison: checkedFilter === 'unchecked' && 'active',
                                        optionFunc: () => changeActiveFilter({tempCheckedFilter: 'unchecked'})
                                    }
                                ]
                            },
                            {
                                subheader: 'Date Action',
                                options: [
                                    {
                                        option: 'Date Added',
                                        activeComparison: dateActionFilter === 'date added' && 'active',
                                        optionFunc: () => changeActiveFilter({tempDateActionFilter: 'date added'})
                                    },
                                    {
                                        option: 'Date Edited',
                                        activeComparison: dateActionFilter === 'date edited' && 'active',
                                        optionFunc: () => changeActiveFilter({tempDateActionFilter: 'date edited'})
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
                                    activeSort={activeSort}
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