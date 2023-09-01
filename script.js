const capturedData = [];

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

function validateFormFields() {
  const requiredFields = [
    "teacher-name",
    "teacher-subject",
    "year",
    "subject-type",
    "resources",
    "flexibility",
    "paper",
    "other"
  ];
  for (const fieldName of requiredFields) {
    const field = document.querySelector(`input[name='${fieldName}'], select[name='${fieldName}']`);
    if (!field.value.trim()) {
      return false; // Field is empty, validation failed
    }
  }
  return true; // All required fields are filled
}

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the form from submitting
  if (!validateFormFields()) {
    alert("Please fill in all the required fields.");
    return;
  }
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  // setTimeout(function() {
  //   alert("Your Form Has been Submitted. We Thank you for helping your juniors");
  //   location.reload();
  // }, 800);
  captureAndDisplayData();
});
prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
// captureAndDisplayData();

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

function captureAndDisplayData() {
  // Capture form data and convert it to a JSON object
    const formData = {
      teacherName: document.querySelector("input[name='teacher-name']").value,
      teacherSubject: document.querySelector("input[name='teacher-subject']").value,
      yearTaught: getSelectedOptionText("year"),
      subjectType: getSelectedOptionText("subject-type"),
      resourcesProvided: document.querySelector("input[name='resources']").value,
      dateFlexibility: document.querySelector("input[name='flexibility']").value,
      paperType: document.querySelector("input[name='paper']").value,
      otherInfo: document.querySelector("input[name='other']").value
    };
    
    //Validating form fields, so that they will not be blank
    // if (
    //   formData.teacherName === "" ||
    //   formData.teacherSubject === "" ||
    //   formData.yearTaught === "Select Year" || // Update this based on your option text
    //   formData.subjectType === "Select Subject Type" || // Update this based on your option text
    //   formData.resourcesProvided === "" ||
    //   formData.dateFlexibility === "" ||
    //   formData.paperType === "" ||
    //   formData.otherInfo === ""
    // ) {
    //   alert("Please fill out all fields before submitting.");
    //   // location.reload();
    //   return; // Stop execution if any field is blank
    // }
    // Retrieve existing data from local storage
    const existingDataJSON = localStorage.getItem('capturedData');
    const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];
  
    // Add the new form data to the existing data
    existingData.push(formData);
  
    // Store the updated data back in local storage
    const updatedDataJSON = JSON.stringify(existingData);
    localStorage.setItem('capturedData', updatedDataJSON);
  
    // Clear input fields after capturing data
    document.querySelector("input[name='teacher-name']").value = "";
    document.querySelector("input[name='teacher-subject']").value = "";
    document.querySelector("select[name='year']").selectedIndex = 0;
    document.querySelector("select[name='subject-type']").selectedIndex = 0;
    document.querySelector("input[name='resources']").value = "";
    document.querySelector("input[name='flexibility']").value = "";
    document.querySelector("input[name='paper']").value = "";
    document.querySelector("input[name='other']").value = "";
  
    // Display the captured data in a table
    window.location.href = "display.html";
  };
  function getSelectedOptionText(selectName) {
    const selectElement = document.querySelector(`select[name='${selectName}']`);
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    return selectedOption.textContent;
  }
