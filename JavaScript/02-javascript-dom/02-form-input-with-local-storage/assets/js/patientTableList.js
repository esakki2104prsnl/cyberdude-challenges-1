import { formatMyDate } from "./utils";

const localStorageKey = "bookingData";

function getAllDatasInTableForm() {
    // Get all the datas from localStorage
    const fetchedDatas = localStorage.getItem(localStorageKey);
  
    const fetchedDatasArr = JSON.parse(fetchedDatas);
    // console.log(fetchedDatasArr);
  
    // Show in Table UI
    const tableEl = document.querySelector("#table-result")
    const tblBody = document.querySelector("#tbl-body");
  
    if (fetchedDatasArr && fetchedDatasArr.length > 0) {
     
      // tableEl.classList.remove("hidden")
      tblBody.innerHTML = ""
  
      const newFinalRow = []
  
      fetchedDatasArr.map((element) => {
        // Table Row Element
        const tblRowEl = document.createElement("tr");
  
        // Delete Button
        const deleteBtnEl = document.createElement("button")
  
        const firstNameCell = document.createElement("td")
        const lastNameCell = document.createElement("td")
        const contactNumCell = document.createElement("td")
        const stateCell = document.createElement("td")
        const provinceCell = document.createElement("td")
        const serviceCell = document.createElement("td")
        const dateCell = document.createElement("td")
        const deleteBtnCell = document.createElement("td")
  
        firstNameCell.classList.add("px-2", "py-1.5", "border");
        firstNameCell.textContent = element["first-name"]
  
        lastNameCell.classList.add("px-2", "py-1.5", "border");
        lastNameCell.textContent = element["last-name"];
  
        contactNumCell.classList.add("px-2", "py-1.5", "border");
        contactNumCell.textContent = element["contact-number"];
        
        stateCell.classList.add("px-2", "py-1.5", "border");
        stateCell.textContent = element["country-state"];
        
        provinceCell.classList.add("px-2", "py-1.5", "border");
        provinceCell.textContent = element["province-ist"];
        
        serviceCell.classList.add("px-2", "py-1.5", "border");
        serviceCell.textContent = element["service-list"];
        
        dateCell.classList.add("px-2", "py-1.5", "border");
        dateCell.textContent = formatMyDate(element["date-of-booking"]);
  
        
        deleteBtnEl.className = "bg-[#03312E] hover:bg-[#355A57] hover:transition 500 px-3 py-1.5 text-[#E5EAEA] rounded-md"
        deleteBtnEl.textContent = "Delete"
  
        deleteBtnEl.addEventListener("click", () => {
          deleteRecord(element)
        })
  
       
        deleteBtnCell.classList.add("px-2", "py-1.5", "border");
  
        deleteBtnCell.append(deleteBtnEl)
        tblRowEl.append(firstNameCell, lastNameCell, contactNumCell, stateCell, provinceCell, serviceCell, dateCell, deleteBtnCell)
  
        newFinalRow.push(tblRowEl)
      });
  
      newFinalRow.forEach((el) => tblBody.append(el))
    }
  }
  
  getAllDatasInTableForm()
  
  function deleteRecord(formObjectJSONData) {
  
    const confirmDelete = confirm(`${formObjectJSONData["first-name"]}! Do you need to delete your request?`)
  
    if(confirmDelete) {
  
      const existingBookingDatas = localStorage.getItem(localStorageKey)
  
      let existingBookingArray = JSON.parse(existingBookingDatas)
  
      let filteredItem = existingBookingArray.filter((element) => {
  
       return element["contact-number"] != formObjectJSONData["contact-number"]
  
      })
  
      console.log(filteredItem);
      existingBookingArray = filteredItem
      localStorage.setItem(localStorageKey, JSON.stringify(existingBookingArray))
  
    }
    getAllDatasInTableForm()
  }
  
  getAllDatasInTableForm()