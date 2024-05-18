const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// var a = document.querySelector("#elem-1")
// console.log(a)

function page6Animation(){
    var elemC = document.querySelector("#row-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    // alert("hoo")
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave",function(){
    // alert("hoo")
    fixed.style.display = "none"
})
var elems = document.querySelectorAll(".elem")
// console.log(elems)
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})` 
    })
})
}
function swiperAnimation(){
      var swiper = new Swiper(".mySwiper", {
          slidesPerView: 4,
          spaceBetween: 50,
          centeredSlides: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });  

  }
   swiperAnimation()  
   page6Animation()