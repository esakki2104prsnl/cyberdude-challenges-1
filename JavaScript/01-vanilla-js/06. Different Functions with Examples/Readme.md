# Cyberdude Challenges

## Challenge: Create a different ways of defining functions and explain it in detail with Examples.

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
**Task 04:** Create a different ways of defining functions and explain it in detail with Examples.

&nbsp; 📝 **Note:** The following tasks have been assigned to further enhance our JavaScript skills during your internship at [CyberDude Networks Pvt. Ltd.](https://www.cyberdudenetworks.com)

## Technologies Used and Learned

| S. No | Technologies Used                    |
| :--- | ------------------------------------ |
| 01   | [Javascript](./js/) |



## Code

```
///* Types of Functions:
//*     - Expression
//*     - Return
//*     - Pass Arguments and Receive Parameters
//*     - IIFE (Immediately Invoked Function Expression)


//* Scenario: Daily Routine

//* Calculating Productive Time with Expression Function
const calcProductiveTime = function (works) {
    return works.reduce((accumulator, task) => accumulator + task.duration, 0)
}



//* Finding Break with Arrow Function with return
const breakAlert = (myActivityTotalTime) => {
    const humanProductiveHours = 240

    if(myActivityTotalTime < humanProductiveHours) {
        return "Rest Onnum thevele, moodittu olungaa veleye paaru"
    } else {
        return "Dai pothum niruththudaa venna mavane!!!"
    }
}

//* Counting Prior Activities
function countActivities(...works) {
    const count = works.filter((value) => value.type === "Prior").length

    if(count > 0 && count < 2) {

        console.log("7 Kaluthe vayasaayidichchi, Ithu Ethukku kaanum unakku???");

    } else if(count > 3 && count < 5) {

        console.log("Thambi! Nee romba over a pore; Manda baththirem");

    } else {

        console.log("Onakku death'u confirm da");
    }
}


//* IIFE Function
( function () {
    console.log("My Brain's mindvoice: Innakki Ennevellaam Panna Poraano...😢");

    // Defining Empty Array
    const myActivity = [];

    const firstActivity = { name: "Task Pannanum", type: "Prior", duration: 60}
    // const secondActivity = { name: "Research Report Eluthenum 😢", type: "Prior", duration: 60}
    // const thirdAct = { name: "Project Work pannanum 😢😢😢", type: "Prior", duration: 100}
    // const fourthAct = { name: "PHP Leaaring vere irukku; Athu pannanum", type: "Prior", duration: 100}

    myActivity.push(firstActivity)
    // myactivity.push(secondActivity)
    // myactivity.push(thirdAct)
    // myactivity.push(fourthAct)


    const showActivies = (myArray) => {
        console.log("Innaya List: ");
        let i = 0
       myArray.forEach(element => {
        console.log(`${i += 1}: ${element.name}, Time: ${element.duration}`);
        });
    }


    showActivies(myActivity)

    const myProductiveTotal = calcProductiveTime(myActivity)
    const breakAler = breakAlert(myProductiveTotal)

    countActivities(firstActivity)
    console.log(breakAler);

})()
```


## Internship

This internship is provided by [CyberDude Networks Pvt. Ltd.](https://youtube.com/cyberdudenetworks) as part of the 6-Month Free Internship program, a skill development initiative organized to enhance participants' skills. Mentoring was provided by [Mr. Anbuselvan Rocky](https://instagram.com/anbuselvanrocky). For more information, [you can contact CyberDude Networks here](https://cyberdudenetworks.com).


## Acknoledgments
- [Muthukumari](https://github.com/muthukumarimoorthi)

## References
In lieu of referencing the Object-related series, I would like to bring your attention to our JavaScript series. I believe that delving into these materials will provide you with a more comprehensive understanding of the subject matter.

[![https:>www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa](http:>img.youtube.com/vi/OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa/0.jpg)](http:>www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa "What is JavaScript - (தமிழில்) (Tamil)")