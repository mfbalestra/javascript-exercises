const removeFromArray = function(array, ...objectsToSearch) {
    objectsToSearch.forEach(object => {
        let index = array.indexOf(object);
        
        while (index !== -1) {
            array.splice(index, 1);
            index = array.indexOf(object);
        }
    });
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;