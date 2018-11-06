// Function to implement sticky effect on scroll down
window.onscroll = () => {
  scrollDown();
};

const nav = document.getElementsByTagName('nav');
let sticky = nav[0].offsetTop;

const scrollDown = () => {
  if (window.pageYOffset >= sticky) {
    nav[0].classList.add('sticky');
  } else {
    nav[0].classList.remove('sticky');
  }
  if (window.pageYOffset > 480) {
    nav[0].classList.add('black-bg');
  } else {
    nav[0].classList.remove('black-bg');
  }
};
