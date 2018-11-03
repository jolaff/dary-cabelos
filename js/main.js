// Function to implement sticky effect on scroll down
window.onscroll = () => {
  scrollDown();
};

const nav = document.getElementsByTagName('nav');
let sticky = nav[0].offsetTop;

const scrollDown = () => {
  console.log(sticky);
  if (window.pageYOffset >= sticky) {
    nav[0].classList.add('sticky');
  } else {
    nav[0].classList.remove('sticky');
  }
};
