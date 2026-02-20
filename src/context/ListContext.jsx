import { createContext, useState } from "react";
import { createTime, getTimestamp } from '../utils/date'

export const ListContext = createContext()

export function ListProvider({children}){

    const [list, setList] = useState([]) // list of items
    const [idCounter, setIdCounter] = useState(0) // tracks items by id

    /**
     * Adds a new item to the list
     * @param {string} title - title of the new item
     * @param {string} desc - description of the new item
     */
    function addItem(title, desc){

        const time = createTime()

        setList(prevList => [
            ...prevList, 
            {
                id: idCounter, // item's ID
                title, // item's title
                desc, // item's description
                time, // time that item gets added or edited
                timestamp: getTimestamp(time), // time's timestamp
                checked: false // flag that determines whether the item is checked
            }
        ])

        setIdCounter(idCounter+1)
    }


    /**
     * Checks item from the ToDo list by crossing its details
     * @param {number} tempId - target ID of the item to check
     */
    function checkItem(tempId){
        setList(prev => prev.map(item => (item.id === tempId) ? {...item, checked: item.checked ? false : true} : item))
    }


    /**
     * Saves item with new title and description
     * @param {number} id - id of the item 
     * @param {string} title - new title of the item
     * @param {string} desc - new description of the item
     */
    function saveItem(id, title, desc){

        const time = createTime()

        setList(prevList => prevList.map(item => (item.id === id) ? 
            {...item, 
                title, 
                time,
                timestamp: getTimestamp(time),
                desc, 
            } : item )
        )
    }


    /**
     * Deletes item from the ToDo list
     * @param {number} tempId - target ID of the item to delete
     */
    function deleteItem(tempId){
        setList(list.filter(({id}) => id !== tempId))
    }


    /** 
     * Deletes all checked items 
     */
    function deleteCheckedItems(){
        setList(list.filter(({checked}) => !checked))
    }

    /**
     * Sorts items from the list based on property and order
     * @param {string} prop - item's property, which determines how items are sorted by
     * @param {boolean} descending - flag whether order is in descending order or not
     */
    function sortItems(prop, descending){

        if(prop === null && descending === null)
            return 
        
        setList(list.toSorted((a, b) => {

            if(typeof(a[prop]) === 'string'){
                const options = {sensivity: 'base', numeric: true}
                return descending ? b[prop].localeCompare(a[prop], undefined, options) : a[prop].localeCompare(b[prop], undefined, options)
            }

            return descending ? b[prop] - a[prop] : a[prop] - b[prop]
        }))
    }


    /**
     * Filters items (checked option only)
     * @param {string} filter - string that filters items
     * @returns {object[]} filtered list
     */
    function filterItems(filter){
        return list.filter(({checked}) => filter === 'checked' ? checked : !checked)
    }

    const states = {list, idCounter}
    const methods = {addItem, saveItem, deleteCheckedItems, deleteItem, checkItem, sortItems, filterItems}

    return <ListContext.Provider value={{...states, ...methods}}>{children}</ListContext.Provider>
}