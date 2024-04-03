let slideIndex = 0;
showSlides();
function showSlides() {
  let slides = document.querySelectorAll('.slide');
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  let slideWidth = slides[0].clientWidth;
  document.querySelector('.slider').style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  setTimeout(showSlides, 3000);
}
var bg_body = document.querySelector("body")
const btn = document.getElementById("change")
const txt = Array.from(document.getElementsByClassName("text"))
const titl=document.getElementById("title")
const p=document.querySelector(".txt")
function bg_light() {
  if (bg_body.style.backgroundColor = "#333") {
    bg_body.style.backgroundColor = "#dcdcdc"
    btn.innerText = "dark"
    btn.style = "background-color: #333;color: whitesmoke;"
    txt.forEach((text)=>{
      text.style="color:black;"
      titl.style="text-decoration:none;color:black;"
      p.style="background-color: #999999;color:black;"
    })
  }
  else {
    bg_body.style.backgroundColor = "#333"
  }
}
function bg_dark() {
  if (bg_body.style.backgroundColor = "#dcdcdc") {
    bg_body.removeAttribute("style")
    btn.innerText = "light"
    for (i = 0; i < txt.length; i++) {
      txt[i].removeAttribute("style")
      titl.removeAttribute("style")
    }
  }
  else {
    bg_body.style.backgroundColor = "#dcdcdc"
  }
}
var bg_l=false
var nb_switch = 0
function switsh() {
  nb_switch += 1
  if (nb_switch % 2 != 0) {
    bg_l=false
    return bg_dark()
  }
  if (nb_switch % 2 == 0) {
    bg_l=true
    return bg_light()
  }
}
window.onscroll = function () {
  const heade = document.getElementById("header")
  if (window.pageYOffset !== 0) {
    heade.style = "background: transparent;backdrop-filter: blur(40px);border-bottom-left-radius: 15px;border-bottom-right-radius: 15px; box-shadow: 0px 0px 20px rgb(0, 0, 0); "
  }
  else {
    heade.removeAttribute("style")
  }
}
const cards=document.querySelectorAll(".card")
cards.forEach(function(card){
  card.addEventListener("mouseover",()=>{
    
  })
})
function ishover(element,btn,txt) {
  const butn = document.getElementById(btn)
  const element_hover = document.getElementById(element)
  const card_txt=document.getElementById(txt)
  element_hover.addEventListener("mouseover", function () {
    if(bg_l==true){
      card_txt.style="color:black;"
    }
    if(bg_l==false){
      card_txt.removeAttribute("style")
      butn.style = "border: 1px solid white;color: white;width: max-content;"
    }
  })
  element_hover.addEventListener("mouseout", function () {
    butn.removeAttribute("style")
    card_txt.removeAttribute("style")
  })
}
ishover("card1","btn1","card1-body")
ishover("card2","btn2","card2-body")
ishover("card3","btn3","card3-body")

