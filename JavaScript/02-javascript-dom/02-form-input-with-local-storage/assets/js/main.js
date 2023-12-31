import JustValidate from "just-validate";
import { formatMyDate } from "./utils";

const formEl = document.getElementById("bookingForm");
// console.log(formEl);

const showDetailsBtn = document.querySelector("#showDetailsBtn");

const localStorageKey = "bookingData";

const validator = new JustValidate(formEl, {
  validateBeforeSubmitting: true,
});

// First Name Validation
validator.addField(
  "#first-name",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 15,
    },
  ],
  {
    errorLabelStyle: {
      color: "#e34444",
    },
  }
);

// Last Name validation
validator.addField(
  "#last-name",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 15,
    },
  ],
  {
    errorLabelStyle: {
      color: "#e34444",
    },
  }
);

// Contact Number
validator.addField(
  "#contact-number",
  [
    {
      rule: "required",
    },
    {
      rule: "number",
    },
    {
      rule: "minLength",
      value: 10,
    },
    {
      rule: "maxLength",
      value: 10,
    },
  ],
  {
    errorLabelStyle: {
      color: "#e34444",
    },
  }
);

validator.addField(
  "#country-state",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelStyle: {
      color: "#e34444",
    },
  }
);

validator.addField(
  "#province-list",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelStyle: {
      color: "#e34444",
    },
  }
);

validator.addField(
  "#service-list",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelStyle: {
      color: "#e34444",
    },
  }
);

validator.addField(
  "#date-of-booking",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelStyle: {
      color: "#e34444",
    },
  }
);

validator.onSuccess(() => {
  // !Need to get all form data
  const formData = new FormData(formEl);
  const formValuObj = Object.fromEntries(formData.entries());

  const newBookingArrayObj = [];

  // Get existing data from localStorage, if exist!
  const existingBookingData = localStorage.getItem(localStorageKey);
  // console.log(existingBookingData);

  // Parse into JSON file
  const existingBookingArray = JSON.parse(existingBookingData);
  // console.log(existingBookingArray);

  /* 
      If data already exists in localStorage; the new data which is entered by user (formValueObj) need to store with
      existing data in localStorage. If there is no any data in localStorage, at that time the user entering data (formValuObj)
      need to store as fresh entry. 
    */

  if (existingBookingArray) {
    existingBookingArray.push(formValuObj);
    // console.log(existingBookingArray);
    localStorage.setItem(localStorageKey, JSON.stringify(existingBookingArray));
  } else {
    newBookingArrayObj.push(formValuObj);
    localStorage.setItem(localStorageKey, JSON.stringify(newBookingArrayObj));
  }

  formEl.reset();

  // Navigate to all_details.html page to show All Patient Booking details
  window.open("all_details.html", "_self");
});

// validator.onSuccess(() => {

//   // Todo: If the validation success, when the user clicks Show Details button, need to run redirectAllDetails()
//   showDetailsBtn.addEventListener("click", redirectAllDetails);

// })


// // Todo: Navigate to all_details.html page to show All Patient Booking details
// function redirectAllDetails() {
  // window.open("all_details.html", "_self");
// }
