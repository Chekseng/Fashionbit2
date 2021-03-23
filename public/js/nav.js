let navbar = document.querySelector('.navbar')
let navMenu = document.querySelector('.nav-menu')
let navToggle = document.querySelector('.toggle')

// selecting date html elements
let weekDayName = document.querySelector('#week-day-name')
let monthDayNumber = document.querySelector('#month-day-number')
let monthName = document.querySelector('#month-name')
let year = document.querySelector('#year')

// array of week days and month names
let weekDayList = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday']
let monthNameList = [ 'January','Febuary','March','April','May','June','July','August','September','October','November','December']

// implementing the date feature
let d = new Date();
let setWeekDay = d.getDay();
let setMonthDateNumber = d.getDate();
let setMonthName = d.getMonth();
let setYear = d.getFullYear();

weekDayName.innerHTML = weekDayList[setWeekDay] + ' , '
monthDayNumber.innerHTML = setMonthDateNumber
monthName.innerHTML = monthNameList[setMonthName] + ' , '
year.innerHTML = setYear


// selecting the span element form time-clock
let timeClock = document.querySelector('.time-clock');

// function to toggle the mobile nav menu when clicked
function toggleMenu() {
  if(navMenu.classList.contains('show-nav-menu')){
    navMenu.classList.remove('show-nav-menu')
    navToggle.innerHTML = "<i class='fas fa-bars'></i>"
  } else {
    navMenu.classList.add('show-nav-menu')
    navToggle.innerHTML = "<i class='fas fa-times'></i>"
  }
}


// function to make the desktop nav menu sticky on scroll
function stickyMenu(){
  let stickyTop = navbar.offsetTop;
  if (window.pageYOffset > stickyTop) {
    navbar.classList.add("navbar-sticky")
  } else {
    navbar.classList.remove("navbar-sticky");
  }
}

// initialize the time-clock interval
let intervalId;

// function to show time-clock
function showTime() {
  // get the current date-time
  let timeDate = new Date();
  timeClock.innerHTML = timeDate.toLocaleTimeString();
}

// set up the time-clock interval
intervalId = setInterval(() => {
  showTime()
}, 1000)

// nav-toggle event listener
navToggle.addEventListener('click', toggleMenu, false)

// sticky menu event listener
window.addEventListener('scroll', stickyMenu, false)