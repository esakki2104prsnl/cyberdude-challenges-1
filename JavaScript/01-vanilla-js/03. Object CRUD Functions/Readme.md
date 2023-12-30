# Cyberdude Challenges

## Challenge: CRUD (Create, Read, Update, Delete) in Object (JavaScript)

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
### Task 02: Create an Object and Perfom CRUD Operation
&nbsp; 📝 **Note:** The following tasks have been assigned to further enhance our JavaScript skills during your internship at [CyberDude Networks Pvt. Ltd.](https://www.cyberdudenetworks.com)

## Technologies Used and Learned

| S. No | Technologies Used                    |
| :--- | ------------------------------------ |
| 01   | [Javascript](./js/) |


## Code

```
// Task 02: Create an Object
let person = {
    firstName: "Mohamed",
    lastName: "Mushkir",
    personAge: 27,
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  
    set fullName(nameValue) {
      let newName = nameValue.split(" ");
      this.firstName = newName[0];
      this.lastName = newName[1] ?? "";
    },
  
    activities() {
      let activities = [
        "Learning new things",
        "Coding",
        "Watching movies",
        "Photography",
      ];
  
      if (this.lastName == "") {
        console.log(`Leisure Activities of ${person.firstName}`);
        for (let i = 0; i < activities.length; i++) {
          console.log(`${i + 1}. ${activities[i]}`);
        }
      } else {
        console.log(`Leisure Activities of ${person.lastName}: `);
        for (let i = 0; i < activities.length; i++) {
          console.log(`${i + 1}. ${activities[i]}`);
        }
      }
    },
  };

  // Updating Name using Set Method
  person.fullName = "Musakir";
  
  // Showing First Name and Last Name
  console.log(`First Name: ${person.firstName} 
  Last Name: ${person.lastName}`);
  console.log(`Full Name is: ${person.fullName}`);
  // console.log(`Age of ${person.lastName} is ${person.personAge}`);
  
  // Delete Operation
  delete person.personAge
  typeof person.personAge == "undefined" ? console.log(`Age is Deleted`) : console.log(`Age is ${person.personAge}`);
  
  person.activities();
  
  // person.activities();
  
```


## Internship

This internship is provided by [CyberDude Networks Pvt. Ltd.](https://youtube.com/cyberdudenetworks) as part of the 6-Month Free Internship program, a skill development initiative organized to enhance participants' skills. Mentoring was provided by [Mr. Anbuselvan Rocky](https://instagram.com/anbuselvanrocky). For more information, [you can contact CyberDude Networks here](https://cyberdudenetworks.com).


## Acknoledgments

## References
In lieu of referencing the Object-related series, I would like to bring your attention to our JavaScript series. I believe that delving into these materials will provide you with a more comprehensive understanding of the subject matter.

[![https:>www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa](http:>img.youtube.com/vi/OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa/0.jpg)](http:>www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa "What is JavaScript - (தமிழில்) (Tamil)")