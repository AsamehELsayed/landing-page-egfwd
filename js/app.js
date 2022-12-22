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
var sections = document.querySelectorAll("section");
var navBarList = document.querySelector("#navbar__list");

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

// build the nav
function makeLists() {
  for (var i = 0; i <= sections.length - 1; i++) {
    var L_links = document.createElement("a");
    L_links.setAttribute("id", `section${i + 1}link`);
    L_links.setAttribute("onClick",`sectionPos(${i})`)
    L_links.innerText = `section ${i + 1}`;
    navBarList.appendChild(L_links);
    navBarList.setAttribute("id",`link${i}`)
  }
}
// Add class 'active' to section when near top of viewport
var Scroll = function () {
  var scrollPos =this.window.scrollY;
  sections.forEach((section) => {
    if (
      scrollPos+300 >= section.offsetTop &&
      scrollPos+300< section.offsetTop + section.offsetHeight
    ) {
      var currentId = section.attributes.id.value;
      removeAvtiveClass();
      addActiveClass(currentId);
    }
  });
};
var removeAvtiveClass = function () {
  sections.forEach((ele) => {
    ele.classList.remove("your-active-class");
  });
  var listItems =document.querySelectorAll("a")
  listItems.forEach((link) => {
    link.classList.remove("active-link")
  })
}
addActiveClass = function (id) {
  var activeSection=document.getElementById(id)
  var SectionLink=document.querySelector(`#${id}link`)
  SectionLink.setAttribute("class","active-link")
  activeSection.setAttribute("class","your-active-class")
};
// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
*
*/

// Build menu
makeLists();
// Scroll to section on link click
function sectionPos(sectionNUM){
  window.scrollTo(
    {
      top:sections[sectionNUM].offsetTop,
      behavior:"smooth"
  })
}
// Set sections as active
addEventListener("scroll",Scroll)
