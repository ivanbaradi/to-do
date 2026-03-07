import Item from '../components/item/Item'
import ListButton from '../components/list/ListButton'
import ListDropdown from '../components/list/ListDropdown'
import { useState, useContext } from 'react'
import { useMobile } from '../hooks/mediaQuery'
import { clearOptionGroup, clearOptionGroups, changeActiveOption } from '../utils/dropdownOptions'
import { ListContext } from '../context/ListContext'

export default function List(){

    // Imports some assets from ListContext
    const {list, deleteCheckedItems, sortItems, filterItems} = useContext(ListContext)

    // Responsive media
    const onMobile = useMobile()

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

    // Displays error message due to zero items in the list
    if(list.length === 0)
        return <h2 style={{margin: '50px 0'}}>There are no items in the list.</h2>

    return (
        <main className='sub-content' style={{marginTop: '20px'}}>
            <div className='container' style={{marginBottom: '20px'}}>
                <div className={`row ${onMobile ? 'row-cols-2' : 'row-cols-auto'}`}>
                    <ListDropdown 
                        header='Sort' // button text
                        optionGroups={[
                            {
                                subheader: 'Type', // OPTIONAL: option's subheader
                                options: [ // list of options per each option group
                                    {
                                        option: 'Title', // name of the option
                                        activeComparison: activePropSort === 'title' && 'active', // comparison for highlight active option (NOTE: In sort options, option's value must be set with item's property)
                                        optionFunc: () => changeActiveOption('activePropSort', 'title', setActiveSort) // function to set active option
                                    },
                                    {
                                        option: 'Date',
                                        activeComparison: activePropSort === 'time' && 'active',
                                        optionFunc: () => changeActiveOption('activePropSort', 'time', setActiveSort)
                                    }
                                ]
                            },
                            {
                                subheader: 'Order',
                                options: [
                                    {
                                        option: 'Ascending',
                                        activeComparison: descending === null ? 'disabled' : !descending && 'active',
                                        optionFunc: () => changeActiveOption('descending', false, setActiveSort)
                                    },
                                    {
                                        option: 'Descending',    
                                        activeComparison: descending === null ? 'disabled' : descending && 'active',
                                        optionFunc: () => changeActiveOption('descending', true, setActiveSort)
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
                                        optionFunc: () => changeActiveOption('checkedFilter', 'checked', setActiveFilters)
                                    },
                                    {
                                        option: 'Unchecked',
                                        activeComparison: checkedFilter === 'unchecked' && 'active',
                                        optionFunc: () => changeActiveOption('checkedFilter', 'unchecked', setActiveFilters)
                                    }
                                ]
                            },
                            {
                                subheader: 'Date Action',
                                options: [
                                    {
                                        option: 'Date Added',
                                        activeComparison: dateActionFilter === 'date added' && 'active',
                                        optionFunc: () => changeActiveOption('dateActionFilter', 'date added', setActiveFilters)
                                    },
                                    {
                                        option: 'Date Edited',
                                        activeComparison: dateActionFilter === 'date edited' && 'active',
                                        optionFunc: () => changeActiveOption('dateActionFilter', 'date edited', setActiveFilters)
                                    }
                                ]
                            },
                            {
                                subheader: 'Description',
                                options: [
                                    {
                                        option: 'With Description',
                                        activeComparison: descFilter === 'with desc' && 'active',
                                        optionFunc: () => changeActiveOption('descFilter', 'with desc', setActiveFilters)
                                    },
                                    {
                                        option: 'Without Description',
                                        activeComparison: descFilter === 'without desc' && 'active',
                                        optionFunc: () => changeActiveOption('descFilter', 'without desc', setActiveFilters)
                                    }
                                ]                               
                            }
                        ]}   
                        mobileMarginAdjust={true}                 
                    />
                    <ListButton
                        buttonColor='btn-dark' // button color in bootstrap
                        header='Clear All Filters'
                        func={() => clearOptionGroup(setActiveFilters)} 
                        mobileMarginAdjust={true}
                    />
                    <ListButton
                        buttonColor='btn-dark' 
                        header='Clear All Options' 
                        func={() => clearOptionGroups([setActiveSort, setActiveFilters])} 
                        mobileMarginAdjust={true}
                    />
                    <ListButton
                        buttonColor='btn-danger'
                        header='Delete Checked Items'
                        func={deleteCheckedItems} 
                        fullWidth={true} // takes 100% width (mobile only)
                    />
                </div>
            </div>
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
                                    mobileMarginAdjust={i < n-1}
                                    tabletMarginAdjust={i < n-2}
                                    laptopMarginAdjust={i < n-3}
                                    largeLaptopMarginAdjust={i < n-4}
                                />
                            )
                        }
                    </div>
                </div>
            }
        </main>
    ) 
}