# Cyberdude Challenges

## Challenge: Create an Array of Objects and loop through it. Discuss about various looping options.

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
**Task 05:** Create an Array of Objects and loop through it. Discuss about various looping options.

&nbsp; 📝 **Note:** The following tasks have been assigned to further enhance our JavaScript skills during your internship at [CyberDude Networks Pvt. Ltd.](https://www.cyberdudenetworks.com)

## Technologies Used and Learned

| S. No | Technologies Used                   |
| :--- | ------------------------------------ |
| 01   | [Javascript](./js/)                  |



## Code
```
//* Loops:
//* - For
//* - While
//* - Do While
//* - For In
//* - For Of
//* - ForEach

//!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//* Creating an Array Object
const library = [
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: ["Douglas Adams", "Harper Lee"],
    genre: "Science Fiction",
    year: 2000
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    year: 1990
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    year: 2005
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    year: 1800
  },
];


// For loop
const listBookTitle = function () {
  console.log("Book List: ");
  for (let i = 0; i < library.length; i++) {
    console.log(`${"\t"} ${i + 1}. ${library[i].title}`);
  }
};

// Do While loop
const listAuthor = function () {
  console.log("List of Authors");
  let i = 0;
  do {
    console.log(`${"\t"} ${i + 1}. ${library[i].author}`);
    i++;
  } while (i < library.length);
};


// While loop
// Todo: Find the book detail according to Genre without find()
const findBook = (value) => {
  let i = 0;
  while (i < library.length) {
    if (typeof library[i].genre === "string" && library[i].genre === value) {
      return library[i];
    }
    i++;
  }
  return null;
};

// for-Of
const listItems = () => {
  let i = 1
  console.log(`List of Books and Genre: `);
  for (const key of library) {
    console.log(`${"\t"} ${i++}. Title: ${key.title} and Genre: ${key.genre}`);
  }
}

//* Calling function to for-loop
// listBookTitle();

//* Calling fucntion to Do-While loop
// listAuthor();

//* Calling function to For-Of
// listItems()

// While Loop
// const isBookAvailable = findBook("Classic");
// if(isBookAvailable) {
//   console.log(
//     `You searched: ${isBookAvailable.genre} type genre. So, here are the results:
    
//     ${"\t"}📚 Title of Book: ${isBookAvailable.title}
//     ${"\t"}🖊️ Author: ${isBookAvailable.author}`

//   );
// } else {

//   console.log(`${isBookAvailable.genre} is not available at this moment`);

// }
```



## Internship

This internship is provided by [CyberDude Networks Pvt. Ltd.](https://youtube.com/cyberdudenetworks) as part of the 6-Month Free Internship program, a skill development initiative organized to enhance participants' skills. Mentoring was provided by [Mr. Anbuselvan Rocky](https://instagram.com/anbuselvanrocky). For more information, [you can contact CyberDude Networks here](https://cyberdudenetworks.com).


## Acknoledgments


## References
In lieu of referencing the Object-related series, I would like to bring your attention to our JavaScript series. I believe that delving into these materials will provide you with a more comprehensive understanding of the subject matter.

[![https:>www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa](http:>img.youtube.com/vi/OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa/0.jpg)](http:>www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa "What is JavaScript - (தமிழில்) (Tamil)")