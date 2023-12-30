const userAge = prompt("Enter your age");
const dataVerify = /^\d+$/;

if (dataVerify.test(userAge)) {
  switch (true) {
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
} else {
  alert("Enter Numeric value");
}
