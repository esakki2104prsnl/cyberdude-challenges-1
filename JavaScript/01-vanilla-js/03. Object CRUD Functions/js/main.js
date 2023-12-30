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
  