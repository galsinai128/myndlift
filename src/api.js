import dataToFilter from './dataToFilter.json'
import {isPassFilter} from './utils'

export function getFilteredData(filterText){
    let filteredItems = [];
    let dataToFilterKeys = Object.keys(dataToFilter);
    dataToFilterKeys.map(key =>{
        let listings = dataToFilter[key].listings;
        if (listings){
            let listingsKeys = Object.keys(listings);
            listingsKeys.map(listingsKey => {
                if (isPassFilter(filterText,listings[listingsKey])){
                    filteredItems.push(listings[listingsKey])
                }
            })
        }
    })
    return filteredItems;
}



export function sendMessage(email,data){
    //do something!!
    console.log(email,data)
}