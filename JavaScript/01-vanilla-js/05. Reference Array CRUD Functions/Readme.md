# Cyberdude Challenges

## Challenge: CRUD (Create, Read, Update, Delete) in Reference Array (JavaScript)

<a href="https://www.cyberdudenetworks.com/">
  <img src="https://cyberdudenetworks.com/assets/img/assets/banner.png"/>
</a>

## Table of Contents

- [Description](#description)
- [Technologies Used and Learned](#technologies-used-and-learned)
- [Code](#code)
- [Internship](#internship)
- [Acknowloedgment](#acknowloedgment)
- [References](#references)



## Description
### Task 03: Create a Primitive Array and Reference Array and Perfom CRUD Operation
&nbsp; 📝 **Note:** The following tasks have been assigned to further enhance our JavaScript skills during your internship at [CyberDude Networks Pvt. Ltd.](https://www.cyberdudenetworks.com)

## Technologies Used and Learned

| S. No | Technologies Used                    |
| :--- | ------------------------------------ |
| 01   | [Javascript](./js/) |


## Code

```
/// Creating an Object
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

  
```


## Internship

This internship is provided by [CyberDude Networks Pvt. Ltd.](https://youtube.com/cyberdudenetworks) as part of the 6-Month Free Internship program, a skill development initiative organized to enhance participants' skills. Mentoring was provided by [Mr. Anbuselvan Rocky](https://instagram.com/anbuselvanrocky). For more information, [you can contact CyberDude Networks here](https://cyberdudenetworks.com).


## Acknoledgments

## References
In lieu of referencing the Object-related series, I would like to bring your attention to our JavaScript series. I believe that delving into these materials will provide you with a more comprehensive understanding of the subject matter.

[![https:>www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa](http:>img.youtube.com/vi/OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa/0.jpg)](http:>www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa "What is JavaScript - (தமிழில்) (Tamil)")