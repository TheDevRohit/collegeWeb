let closeBtn = document.getElementById("menu-close-btn")
let navLinks = document.querySelector(".nav-links") 
closeBtn.addEventListener("click",()=>{
   navLinks.style.right = "-410px" 
})

let menuBtn = document.getElementById("menu-btn")
menuBtn.addEventListener("click",()=>{
   navLinks.style.right = "0" 
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// For Courses Click Event 

// let c = document.getElementById("courseClick");

// c.addEventListener("click" ,()=>{
//   window.location.href="courseinner.html";
// })


// For active Link

const activePage = window.location.pathname;
// console.log(activePage.href);  
console.log(activePage);  

const navLink= document.querySelectorAll(".nav-links a")

navLink.forEach((elem)=>{
  if(elem.href.includes(`${activePage}`)){
    //  console.log(`${activePage}`)
     elem.classList.add('active')
  }
})