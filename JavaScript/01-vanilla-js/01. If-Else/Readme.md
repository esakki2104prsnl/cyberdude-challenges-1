# Cyberdude Challenges

## Challenge: If-Else (JavaScript)

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

| s.no | Technologies Used |
| :--- | ----------------- |
| 01   | [Javascript]      |

## Code

[Getting input from user]: #

const userAge = prompt("Enter Your Age: ");

[Verifying user entered value either number or text.]: #

```
const dataVerify = /^\d+$/;

function ticketCalculate(age)
{
  if (age < 12)
  {
    console.log(`You are under 12. Your ticket price is Rs. 5.00/-`);

  } else if (age < 18)

  {
    console.log(`You are under 18. Your ticket price is Rs. 10.00/-`);

  } else if (age < 60)

  {
    console.log(`You are under 60. Your ticket price is Rs. 20.00/-`);

  } else

  {
    console.log(`You are above 60. Your ticket price is Rs. 15.00/-`);
  }
}

[Checking the Condition and Calling function]: #
if (dataVerify.test(userAge))
{
  ticketCalculate(userAge);

} else
{
  alert("Enter Valid Number Value");
}
```

## Internship

This internship is provided by [CyberDude Networks Pvt. Ltd.](https://youtube.com/cyberdudenetworks) as part of the 6-Month Free Internship program, a skill development initiative organized to enhance participants' skills. Mentoring was provided by [Mr. Anbuselvan Rocky](https://instagram.com/anbuselvanrocky). For more information, [you can contact CyberDude Networks here](https://cyberdudenetworks.com).

## Acknoledgments

## References

[![https://www.youtube.com/watch?v=WebG_D9-U80&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=29](http://img.youtube.com/vi/WebG_D9-U80&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=28/0.jpg)](http://www.youtube.com/watch?v=WebG_D9-U80&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=28 "JavaScript If-Else (With Examples)")
