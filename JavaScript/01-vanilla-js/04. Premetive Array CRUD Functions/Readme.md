# Cyberdude Challenges

## Challenge: CRUD (Create, Read, Update, Delete) in Primitive Array (JavaScript)

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
### Task 03: Create a Primitive Array and Perfom CRUD Operation
&nbsp; 📝 **Note:** The following tasks have been assigned to further enhance our JavaScript skills during your internship at [CyberDude Networks Pvt. Ltd.](https://www.cyberdudenetworks.com)

## Technologies Used and Learned

| S. No | Technologies Used                    |
| :--- | ------------------------------------ |
| 01   | [Javascript](./js/) |


## Code

```
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

  
```


## Internship

This internship is provided by [CyberDude Networks Pvt. Ltd.](https://youtube.com/cyberdudenetworks) as part of the 6-Month Free Internship program, a skill development initiative organized to enhance participants' skills. Mentoring was provided by [Mr. Anbuselvan Rocky](https://instagram.com/anbuselvanrocky). For more information, [you can contact CyberDude Networks here](https://cyberdudenetworks.com).


## Acknoledgments

## References
In lieu of referencing the Object-related series, I would like to bring your attention to our JavaScript series. I believe that delving into these materials will provide you with a more comprehensive understanding of the subject matter.

[![https:>www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa](http:>img.youtube.com/vi/OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa/0.jpg)](http:>www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa "What is JavaScript - (தமிழில்) (Tamil)")