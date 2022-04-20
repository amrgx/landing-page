/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

///////////////// General variable

const navi = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

////////////////// create the navigationBar

const navigationBar = function createNav() {


  

  let listOfItem = "";


  sections.forEach(section => {
    const sectionId = section.id;
    const dataSet = section.getAttribute("data-nav");
    listOfItem += `<li> <a class="menu__link" href="#${sectionId}">${dataSet}</a></li>`

  });

  navi.innerHTML = listOfItem;


};

navigationBar();



//this function will set the active link to sections and nav-bar and will make the nav-bar scroll smooth to the sections 

function theMainFunction() {
  sections.forEach(section => {


////////////////////////// add class active

    const link = document.querySelector(`a[href="#${section.id}"]`);  
    if (section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().top <= 360) {
      section.classList.add("your-active-class");
      link.classList.add("active__nav");
    } else {
      section.classList.remove("your-active-class");
      link.classList.remove("active__nav");
    }

    //////////////////////////////////// scroll smooth
  
    link.addEventListener("click", function (e) {

      e.preventDefault()
      section.scrollIntoView({

        behavior: "smooth",
      })

    })
  });
}
window.addEventListener("scroll", theMainFunction);



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

