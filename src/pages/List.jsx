import Item from '../components/item/Item'
import ListButton from '../components/list/ListButton'
import ListDropdown from '../components/list/ListDropdown'
import { useState, useContext } from 'react'
import { ListContext } from '../context/ListContext'

export default function List(){

    // Imports some assets from ListContext
    const {list, deleteItem, checkItem, deleteCheckedItems, sortItems, filterItems} = useContext(ListContext)

    // Configures active property and order for sorting items
    const [activeSort, setActiveSort] = useState({
        activePropSort: null, // null = neither option from option group is active
        descending: null
    })

    const {activePropSort, descending} = activeSort
    
    // Configures active filters for filtering items
    const [activeFilters, setActiveFilters] = useState({
        checkedFilter: null, 
        dateActionFilter: null,
        descFilter: null
    })

    const {checkedFilter, dateActionFilter, descFilter} = activeFilters
    
    // List that gets displayed on the web page based on filter and sort options
    const listUI = sortItems(filterItems(list, activeFilters), activePropSort, descending)
    const n = listUI.length

    /**
     * Configures an option to become active
     * @param {object[]} options - list of options from dropdown menu
     * @param {string} option - option to make it active (key)
     * @param {any} newValue - option's new value to make it active (value)
     * @param {React.Dispatch<React.SetStateAction<object>>} setActiveOption - option's setState 
     */
    function changeActiveOption(options, option, newValue, setActiveOption){
        
        setActiveOption(prev => {

            const prevValue = options[option] // previous value of a specific option
            const newOptions = {...prev, [option]: newValue === prevValue ? null : newValue} // configuring option with new value

            // Special case for sorting options
            if(options === activeSort){

                // CASE 1: None of the sorting options are active => ascending order will be active by default
                if(options.descending === null)
                    return {...newOptions, descending: false}

                // CASE 2: Active sorting option is clicked => all sorting options will be inactive
                if(prevValue === newValue)
                    return Object.fromEntries(Object.keys(options).map(key => [key, null]))
            }
            
            return newOptions
        })
    }

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
                                subheader: 'Type', // OPTIONAL: option's subheader
                                options: [ // list of options per each option group
                                    {
                                        option: 'Title', // name of the option
                                        activeComparison: activePropSort === 'title' && 'active', // comparison for highlight active option (NOTE: In sort options, option's value must be set with item's property)
                                        optionFunc: () => changeActiveOption(activeSort, 'activePropSort', 'title', setActiveSort) // function to set active option
                                    },
                                    {
                                        option: 'Date',
                                        activeComparison: activePropSort === 'time' && 'active',
                                        optionFunc: () => changeActiveOption(activeSort, 'activePropSort', 'time', setActiveSort)
                                    }
                                ]
                            },
                            {
                                subheader: 'Order',
                                options: [
                                    {
                                        option: 'Ascending',
                                        activeComparison: descending === null ? 'disabled' : !descending && 'active',
                                        optionFunc: () => changeActiveOption(activeSort, 'descending', false, setActiveSort)
                                    },
                                    {
                                        option: 'Descending',    
                                        activeComparison: descending === null ? 'disabled' : descending && 'active',
                                        optionFunc: () => changeActiveOption(activeSort, 'descending', true, setActiveSort)
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
                                        optionFunc: () => changeActiveOption(activeFilters, 'checkedFilter', 'checked', setActiveFilters)
                                    },
                                    {
                                        option: 'Unchecked',
                                        activeComparison: checkedFilter === 'unchecked' && 'active',
                                        optionFunc: () => changeActiveOption(activeFilters, 'checkedFilter', 'unchecked', setActiveFilters)
                                    }
                                ]
                            },
                            {
                                subheader: 'Date Action',
                                options: [
                                    {
                                        option: 'Date Added',
                                        activeComparison: dateActionFilter === 'date added' && 'active',
                                        optionFunc: () => changeActiveOption(activeFilters, 'dateActionFilter', 'date added', setActiveFilters)
                                    },
                                    {
                                        option: 'Date Edited',
                                        activeComparison: dateActionFilter === 'date edited' && 'active',
                                        optionFunc: () => changeActiveOption(activeFilters, 'dateActionFilter', 'date edited', setActiveFilters)
                                    }
                                ]
                            },
                            {
                                subheader: 'Description',
                                options: [
                                    {
                                        option: 'With Description',
                                        activeComparison: descFilter === 'with desc' && 'active',
                                        optionFunc: () => changeActiveOption(activeFilters, 'descFilter', 'with desc', setActiveFilters)
                                    },
                                    {
                                        option: 'Without Description',
                                        activeComparison: descFilter === 'without desc' && 'active',
                                        optionFunc: () => changeActiveOption(activeFilters, 'descFilter', 'without desc', setActiveFilters)
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