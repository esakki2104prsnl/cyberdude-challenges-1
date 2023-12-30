# Cyberdude Challenges

## Challenge: Switch Case (JavaScript)

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
### Task 01: Create a If-Else condition with all possible conditions

#### &nbsp; Write a program that calculates the ticket price based on age with the following conditions:

#### &nbsp; Age below 12 pay a ticket price of 5,
#### &nbsp; Age below 18 pay a ticket price of 10,
#### &nbsp; Age below 60 pay a ticket price of 20,
#### &nbsp; Age over 60 play a ticket price of 15.


## Technologies Used and Learned

| s.no | Technologies Used                    |
| :--- | ------------------------------------ |
| 01   | [Javascript] |


## Code
[Getting input from user]: #
const userAge = prompt("Enter Your Age: ");

[Verifying user entered value either number or text.]: #
```
const userAge = prompt("Enter your age");\
const dataVerify = /^\d+$/;

if (dataVerify.test(userAge)) 
{
  switch (true) 
  {

    case userAge < 12: {

      console.log("Ticket Price is 5");
      break;
    }

    case userAge < 18: {
      console.log("Ticket price is 10");
      break;
    }

    case userAge < 60: {
      console.log("Ticket price is 20");
    }

    case userAge > 60: {
      console.log("Ticket price is 15");
      break;
    }

    default:
      console.log("Invalid");
  }
}
else 
{
  alert("Enter Numeric value");
}
```


## Internship

This internship is provided by [CyberDude Networks Pvt. Ltd.](https://youtube.com/cyberdudenetworks) as part of the 6-Month Free Internship program, a skill development initiative organized to enhance participants' skills. Mentoring was provided by [Mr. Anbuselvan Rocky](https://instagram.com/anbuselvanrocky). For more information, [you can contact CyberDude Networks here](https://cyberdudenetworks.com).


## Acknoledgments

## References

[![https://www.youtube.com/watch?v=xG5IUyZvbDk&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=29](http://img.youtube.com/vi/xG5IUyZvbDk&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=29/0.jpg)](http://www.youtube.com/watch?v=xG5IUyZvbDk&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=29 "JavaScript Switch-case (With Examples) )")