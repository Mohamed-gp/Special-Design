let background = document.querySelector(".background");
let rsMenu = document.querySelector(".rs-menu");
let skillsProgress = document.querySelectorAll(
  ".our-skills .container > div .progress .number"
);
let imgs = document.querySelectorAll(".our-gallery .container .gallery > img");
let popupImg = document.querySelector(".our-gallery .pop-up-image");
let xBar = document.querySelector(".our-gallery .pop-up-image .close");
let fullShadow = document.querySelector("body .full-shadow");
let dashBoard = document.querySelector(".dashboard");
let rotate = document.querySelector(".setting-rotate");
let mainColor = document.querySelectorAll(".colors > span");
let root = document.querySelector(":root");
let bullet = document.querySelectorAll(".dashboard .bullets-settings > button");
let randomBackground = document.querySelectorAll(
  ".dashboard .backgrounds-settings > button"
);
let links = document.querySelector(".links");
let reset = document.querySelector(".reset");
let y = 0;
let k = 0;
let stop;

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
for (let i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function (e) {
    popupImg.children[0].children[0].innerHTML = e.target.className;
    popupImg.children[1].src = e.target.src;
    popupImg.style.display = "flex";
    fullShadow.style.display = "block";
  };
}
xBar.onclick = function () {
  popupImg.style.display = "none";
  fullShadow.style.display = "none";
};
// start Dash board effect
rotate.addEventListener("click", () => {
  if (y == 0) {
    dashBoard.style = "left: 0";
    rotate.style = "left: 210px;";
    rotate.children[0].style = "animation-name : rotate";
    y++;
  } else {
    dashBoard.style = "left : -210px";
    rotate.style = "left: 0px;";
    rotate.children[0].style = "animation-name : ";
    y--;
  }
});

// colors
for (let i = 0; i < mainColor.length; i++) {
  mainColor[i].addEventListener("click", function (e) {
    root.style = `--random_color: ${
      window.getComputedStyle(e.target).backgroundColor
    };`;
    localStorage.color = window.getComputedStyle(e.target).backgroundColor;
    for (let i = 0; i < mainColor.length; i++) {
      mainColor[i].style.outline = "none";
    }
    e.target.style = "outline: 3px solid white;";
  });
}
// bullet
for (let i = 0; i < bullet.length; i++) {
  bullet[i].addEventListener("click", function (e) {
    if (e.target.innerHTML == "No") {
      links.style.display = "none";
    } else {
      links.style.display = "flex";
    }
    localStorage.bullet = e.target.innerHTML;
    for (let i = 0; i < bullet.length; i++) {
      bullet[i].setAttribute("class", "no");
    }
    bullet[i].setAttribute("class", "active-choice no");
  });
}
// random background images
for (let i = 0; i < randomBackground.length; i++) {
  randomBackground[i].addEventListener("click", function (e) {
    for (let i = 0; i < randomBackground.length; i++) {
      randomBackground[i].className = "no";
    }
    e.target.setAttribute("class", "active-choice no");
    if (e.target.innerHTML == "No") {
      clearInterval(stop);
    } else {
      stop = setInterval(changeBackground, 10000);
    }
    localStorage.background = e.target.innerHTML;
  });
}
// reset
reset.onclick = function () {
  localStorage.clear();
  location.reload();
};

stop = setInterval(changeBackground, 10000);
function changeBackground() {
  background.style.backgroundImage = `url(${imgs[k].src})`;
  k++;
  if (k == imgs.length) {
    k = 0;
  }
}

// playing with local storage
if (localStorage.color != undefined) {
  root.style = `--random_color: ${localStorage.color};`;
}

if (localStorage.background != undefined) {
  if (localStorage.background == "Yes") {
    randomBackground[0].click();
  } else {
    randomBackground[1].click();
  }
}
if (localStorage.bullet != undefined) {
  if (localStorage.bullet == "Yes") {
    bullet[0].click();
  } else {
    bullet[1].click();
  }
}
