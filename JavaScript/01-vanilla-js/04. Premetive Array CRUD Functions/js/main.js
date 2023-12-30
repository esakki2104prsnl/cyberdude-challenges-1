// Primitive Array
const fruits = ["Apple","Jack","Banana"]

// Adding New item as last element
fruits.push("Orange")

// Adding new item as first element
fruits.unshift("Grapes")

// console.log(fruits);

// To do: Update Banana as Mangosteen
// Before update need to search the item
const findElement = (element) => 
{   
    return element === "Banana"
}



// Updating the item
const indexOfElement = fruits.findIndex(findElement)
console.log(indexOfElement);
fruits[indexOfElement] = "Mangosteen";

// Delete Apple
// Function for find index of searching item
const findDeleteEl = (deleteEl) => {
    return deleteEl === "Apple"
}

// Deleting the item
const delIndex = fruits.findIndex(findDeleteEl)
fruits.splice(delIndex,delIndex)

// Directly index apply
// fruits.splice(1,1)

// Reading Items on fruits Array
console.log(fruits);
