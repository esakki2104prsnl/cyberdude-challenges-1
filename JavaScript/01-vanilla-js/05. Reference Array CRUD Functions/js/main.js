// Creating an Object
let fruits = [
    { id: 1, fruitName: "Apple", price: 100 },
    { id: 2, fruitName: "Orange", price: 300 },
    { id: 3, fruitName: "Banana", price: 500 },
  ];


  function showDetails() {
    for(let key of fruits) {
      console.log(` ID No: ${key.id}, Fruit Name: ${key.fruitName}, Price: Rs. ${key.price}.00/-`);
    }
  }
  
  // Adding New
  fruits.push(
      { id: 4, fruitName: "Grape", price: 800 },
      { id: 5, fruitName: "Jack", price: 1200 }
    );
  
  // Update
  // Need to search item
  let findItem = fruits.find((findItem) => {
    return findItem.fruitName == "Grape";
  });
  // console.log(findItem);
  
  // Updating Grape Price as 100
  findItem.price = 100; 
  
  // Delete: Need to delete Banana's record
  let delEl = fruits.filter((deleteEl) => {
      return deleteEl.fruitName != "Banana"
  })
  
  fruits = delEl
  
  
  // Read
  console.log(fruits);
  showDetails()