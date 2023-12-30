// * Getting form elements
const formEl = document.forms.bookingsForm;                     // !Form Element
const btnShow = document.querySelector("#btnShow");             // !Form Button Element
const firstNameEl = formEl.elements.firstName;                  // !First Name Input Element
const lastNameEl = formEl.elements.lastName;                    // !Last Name Input Element
const contactNumberEl = formEl.elements.contactNumber;          // !Contact Number Input Element
const userEmailEl = formEl.elements.userEmail;                  // !Email Input Element
const typesOfEventEl = formEl.elements.typesOfEvent;            // !Types of Events Select Element
const dateOfEventEl = formEl.elements.dateOfEvent;              // !Date of Events: Date Picker Element
const buttonAcceptEl = document.querySelector("#buttonAccept")  // !Accept Button Element

// * Output Div Elements
let userFullNameEl = document.querySelector("#userFullName");
let userFirstNameEl = document.querySelector("#userFirstName");
let userLastNameEl = document.querySelector("#userLastName");
let userContactNumberEl = document.querySelector("#userContactNumber");
let userEmailAdd = document.querySelector("#userEmailAdd");
let eventTypeEl = document.querySelector("#eventType");
let eventDateEl = document.querySelector("#eventDate");
const outputDivEl = document.querySelector("#outputDiv");

// console.dir();

// console.dir(formEl.elements);

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);
  
  console.log(data);

  validateTypeOfEvent();
  validateDateElement();
  gettingAndSettingValues(data);
  showOutput();

  // console.log(userFirstNameEl);
};


// Todo: Need to Validate inputs using OnKeyUp Validation
firstNameEl.addEventListener("keyup", validateFirstName)
lastNameEl.addEventListener("keyup", validateLastName)
contactNumberEl.addEventListener("keyup", validatePhoneNum)
userEmailEl.addEventListener("keyup", validateEmail)


// !Form Event Listener
formEl.addEventListener("submit", handleSubmit);

// Todo: Getting and Setting Input data into relevent output elements
function gettingAndSettingValues(formData) {
  // * Getting Values from Input Elements
  const firstName = firstNameEl.value;
  const lastName = lastNameEl.value;
  const contactNumber = contactNumberEl.value;
  const userEmail = userEmailEl.value;
  const typesOfEvent = typesOfEventEl.options[typesOfEventEl.selectedIndex].text;
  const dateOfEvent = dateOfEventEl.value;


  // * Getting Values from input to Form Data
  formData.firstName = firstName;
  formData.lastName = lastName;
  formData.contactNumber = contactNumber;
  formData.userEmail = userEmail;
  formData.typesOfEvent = typesOfEvent;
  formData.dateOfEvent = dateOfEvent;


  // * Setting Values to Output Elements
  userFullNameEl.innerHTML = `Hi ${formData.firstName} ${formData.lastName} 👋`;
  userFirstNameEl.innerHTML = formData.firstName;
  userLastNameEl.innerHTML = formData.lastName;
  userContactNumberEl.innerHTML = formData.contactNumber;
  userEmailAdd.innerHTML = formData.userEmail;
  eventTypeEl.innerHTML = formData.typesOfEvent;
  eventDateEl.innerHTML = formData.dateOfEvent;

}


//  Todo: Alert Message
buttonAcceptEl.addEventListener("click", () => {

  alert("Thank you for contacting NippiX. Our team will contact you soon...💖")
})


// Todo: When user click Show Detail button, It need to show outputs into relevent output elements
function showOutput() {

  outputDivEl.classList.replace("hidden", "visible");
  outputDivEl.classList.replace("h-0", "h-full");

}


// Todo: Hide error message after given time duration (Milliseconds)
function setTimeoutEvent(duration, errorElement) {
  setTimeout(() => {

    errorElement.style.opacity = "0";
  }, duration);

}


// Todo: Show Error Message / Success Message
function message(errorElement, message) {

  errorElement.innerHTML = message;

}


// Todo: Apply Red color to success message / Valid Message
function errorState(errorElement) {

  errorElement.style.color = "red";
  errorElement.style.opacity = "1";

}


// Todo: Apply Green color to success message / Valid Message
function successState(errorElement) {

  errorElement.style.color = "green";
  errorElement.style.opacity = "1";

}

// Todo: Validate First Name Data
function validateFirstName() {

  const firstName = firstNameEl.value; // !First Name Input Value
  const firstNameError = document.querySelector("#nameError"); // !Error Message Value


  if (firstName.length === 0) {

    message(firstNameError, "First Name is required"); // !Method for showing Empty Message
    errorState(firstNameError); // !Method for Applying red color to error message

    setTimeoutEvent(1500, firstNameError); // !Method for hide the error message after 1.5 seconds

  } else if (!(firstName.length > 3 && firstName.length < 15)) {

    message(firstNameError, "First Name characters should be range of 03 - 15");
    errorState(firstNameError);

  } else {

    message(firstNameError, "First Name is Valid");
    successState(firstNameError);

  }
}


// Todo: Validate Last Name Data
function validateLastName() {

  const lastName = lastNameEl.value; // !Last Name Input Value
  const lastNameError = document.querySelector("#lastNameError"); // !Last Name Error Message Value

  if (lastName.length === 0) {

    message(lastNameError, "Last Name is required");
    errorState(lastNameError);

    setTimeoutEvent(1500, lastNameError);

  } else if (!(lastName.length > 3 && lastName.length < 15)) {

    message(lastNameError, "Last Name characters should be range of 03 - 15");
    errorState(lastNameError);

  } else {
    
    message(lastNameError, "Last Name is Valid");
    successState(lastNameError);

  }
}


// Todo: Validate Phone Number Data
function validatePhoneNum() {

  const contactNumber = contactNumberEl.value; // !Contact Number Input Value
  const contactNumberError = document.querySelector("#contactNumberError"); // !Contact Number Error Message Value

  if (contactNumber.length === 0) {

    message(contactNumberError, "Contact Number is required");
    errorState(contactNumberError);

    setTimeoutEvent(1500, contactNumberError);

  } else if (isNaN(contactNumber)) {

    message(contactNumberError, "This field requires Numeric Values");
    errorState(contactNumberError);

  } else if (contactNumber.length !== 10) {

    message(contactNumberError, "Contact Number should be 10 Digits");
    errorState(contactNumberError);

  } else {

    message(contactNumberError, "Contact Number is Valid");
    successState(contactNumberError);

  }
}

// Todo: Validate Email Address
function validateEmail() {

  const userEmail = userEmailEl.value; // !Email Input Value
  const emailAddError = document.querySelector("#emailAddError"); // !Email Erro Message Value

  if (userEmail.length === 0) {
    
    message(emailAddError, "It can't be empty");
    errorState(emailAddError);

    // setTimeoutEvent(1000, emailAddError);
  } else if (!userEmail.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {

    message(emailAddError, "Invalid Email");
    errorState(emailAddError);

  } else {

    message(emailAddError, "Valid Email");
    successState(emailAddError);

  }
}

// Todo: Validate Event type (Select Element)
function validateTypeOfEvent() {

  const typeOfEventName =
    typesOfEventEl.options[typesOfEventEl.selectedIndex].innerHTML; // !Event Type Select Value

  const restrictValue = typesOfEventEl.options[0].innerHTML; // !Default Value (Type of Event)

  const eventTypeError = document.querySelector("#eventTypeError"); // !Event Type Error Message Value

  if (typeOfEventName === restrictValue) {

    message(eventTypeError, "It can't be Empty");
    errorState(eventTypeError);

    setTimeoutEvent(2000, eventTypeError);

  }
}

// Todo: Validate Date Element
function validateDateElement() {

  const dateOfEvent = dateOfEventEl.value; // !Date of Event Input Value (Date picker)
  const eventDateError = document.querySelector("#eventDateError"); // !Date Error Message Value

  if (dateOfEvent === "") {

    message(eventDateError, "It can't be Empty. Select your event date.");
    errorState(eventDateError);

    setTimeoutEvent(3000, eventDateError);
    
  }
}
