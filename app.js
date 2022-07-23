const play = document.querySelector('button');
const svgContainer = document.getElementById('svg');
const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_tiviyc3p.json' 
});

play.addEventListener('click', () =>{
    animItem.goToAndPlay(0,true);
})



const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-menu");
    const navlinks = document.querySelector("nav-links");
    burger.addEventListener('click',()=>{
      nav.classList.toggle("appear");
      burger.classList.toggle("toggle");
    })
  }
  navSlide();
 
  // sticky navbar

  window.addEventListener("scroll", function(){
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".nav-menu");
    var navbar = document.querySelector("nav");
    var grid = document.querySelector(".grid");
    navbar.classList.toggle("nav-sticky", window.scrollY > 1);
    grid.classList.toggle("grid-sticky", window.scrollY > 1);
    burger.addEventListener('click',()=>{
      nav.classList.toggle("appear-sticky",window.scrollY > 1);
    })
  })

  // carousel

  document.querySelectorAll(".carousel").forEach(carousel =>{
    const items = carousel.querySelectorAll(".carousel-item");
    const buttonsHtml = Array.from(items , ()=>{
      return `<span class="carousel-btn"></span>`;
    });
    carousel.insertAdjacentHTML("beforeend",`
      <div class="carousel-nav">
      ${buttonsHtml.join("")}
    `);
    const buttons = carousel.querySelectorAll(".carousel-btn");
    buttons.forEach((button,i) => {
      button.addEventListener("click", () =>{
        items.forEach(item => item.classList.remove("carousel-item-selected"));
        buttons.forEach(button => button.classList.remove("carousel-btn-selected"));
        items[i].classList.add("carousel-item-selected");
        button.classList.add("carousel-btn-selected");
      });
    });
    items[0].classList.add("carousel-item-selected");
    buttons[0].classList.add("carousel-btn-selected");
  });

