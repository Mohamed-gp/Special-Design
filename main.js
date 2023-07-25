let rsMenu = document.querySelector(".rs-menu");
let skillsProgress = document.querySelectorAll(
  ".our-skills .container > div .progress .number"
  );
let imgs = document.querySelectorAll(".our-gallery .container .gallery > img")
let popupImg = document.querySelector(".our-gallery .pop-up-image")
let xBar = document.querySelector(".our-gallery .pop-up-image .close")
let fullShadow = document.querySelector("body .full-shadow")
  // start responsive menu
window.addEventListener("click", function (e) {
  if (e.target == rsMenu) {
    if (rsMenu.children[0].style.display == "block") {
      rsMenu.children[0].style = "display: none";
    } else {
      rsMenu.children[0].style = "display: block";
    }
  } else {
    rsMenu.children[0].style = "display: none";
  }
});
// scroll animation
window.onscroll = function () {
  if (scrollY >= 1000) {
    skillsProgress[0].style = "width: 95%;left: 0";
    skillsProgress[1].style = "width: 90%;left: 0";
    skillsProgress[2].style = "width: 80%;left: 0";
    skillsProgress[3].style = "width: 60%;left: 0";
    skillsProgress[4].style = "width: 50%;left: 0";
    skillsProgress[5].style = "width: 40%;left: 0";
  }
};

// pop up
for(let i = 0;i < imgs.length;i++){
  imgs[i].onclick = function(e){
    popupImg.children[0].children[0].innerHTML = e.target.className
    popupImg.children[1].src = e.target.src
    popupImg.style.display = "flex"
    fullShadow.style.display = "block" 
  }
}
xBar.onclick = function(){
  popupImg.style.display = "none"
  fullShadow.style.display = "none" 
}