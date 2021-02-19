export function isPassFilter(filterText,item){
    if (item.city.toLowerCase() === filterText.toLowerCase()) return true;
    else if (item.country.toLowerCase() === filterText.toLowerCase()) return true;
    else if (item.state.toLowerCase() === filterText.toLowerCase()) return true;
    return false;
}