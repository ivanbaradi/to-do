import { createContext, useState } from "react";
import { createTimestamp } from '../utils/date'

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

        setList(prevList => [
            ...prevList, 
            {
                id: idCounter,
                title, 
                desc, 
                timestamp: createTimestamp(),
                checked: false
            }
        ])
        setIdCounter(idCounter+1)
    }


    /**
     * Checks item from the ToDo list by crossing its details
     * @param {number} tempId - target index of the item to check
     */
    function checkItem(tempId){
        setList(prev => prev.map(item => (item.id === tempId) ? {...item, checked: item.checked ? false : true} : item))
    }


    /**
     * Saves item after editing mode is complete
     * @param {number} id - id of the item 
     * @param {string} title - new title of the item
     * @param {string} desc - new description of the item
     */
    function saveItem(id, title, desc){
        setList(prevList => prevList.map(item => (item.id === id) ? 
            {...item, 
                title, 
                timestamp: createTimestamp(),
                desc, 
            } : item )
        )
    }


    /**
     * Deletes item from the ToDo list
     * @param {number} tempId - target index of the item to delete
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
     * Sorts items from the list 
     * @param {string} prop -
     * @param {boolean} descending -
     */
    function sortItems(prop, descending){

        if(prop === null && descending === null)
            return 

        setList(list.toSorted((a, b) => {
            const options = {sensivity: 'base', numeric: true}
            return descending ? b[prop].localeCompare(a[prop], undefined, options) : a[prop].localeCompare(b[prop], undefined, options)
        }))
    }

    const states = {list, idCounter}
    const methods = {addItem, saveItem, deleteCheckedItems, deleteItem, checkItem, sortItems}

    return <ListContext.Provider value={{...states, ...methods}}>{children}</ListContext.Provider>
}