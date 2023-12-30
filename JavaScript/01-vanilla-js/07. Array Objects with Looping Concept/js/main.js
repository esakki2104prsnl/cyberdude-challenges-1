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

//! While Loop
const isBookAvailable = findBook("Classc");
if(isBookAvailable) {
  console.log(
    `You searched: ${isBookAvailable.genre} type genre. So, here are the results:
    
    ${"\t"}📚 Title of Book: ${isBookAvailable.title}
    ${"\t"}🖊️ Author: ${isBookAvailable.author}`

  );
} else {

   console.log(`${isBookAvailable.genre} is not available at this moment`);

}

// const array = [1,2,3,4,5,6,7,8,9,10]

// const findValueAndBreak = (value) => {
//   for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     if(value === array[i]) {
//       break;
//     }
//   }
// }

// const findValueAndContinue = (value) => {
//   for(let i = 0; i < array.length; i++) {
//     if(value === array[i]) {
//       continue
//     }
//     console.log(array[i]);
//   }
// }

// findValueAndBreak(6)
// findValueAndContinue(6)

// 4t