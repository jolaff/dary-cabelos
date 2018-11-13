// Function to change background color of navbar on scroll down
window.onscroll = () => {
  scrollDown();
};

const navContainer = document.getElementsByClassName('nav-container');
const nav = document.getElementById('navbar');
let sticky = navContainer[0].offsetTop + 60;

const scrollDown = () => {
  if (window.pageYOffset >= sticky) {
    console.log(nav.offsetTop);
    nav.classList.add('black-bg');
  } else {
    nav.classList.remove('black-bg');
  }
};
