let hello = document.querySelector(".rs-menu");

// hello.addEventListener("click", function () {
//   if (hello.children[0].style.display == "block") {
//     hello.children[0].style = "display: none";
//   } else {
//     hello.children[0].style = "display: block";
//   }
// });

// window.addEventListener("click",function(){
//     if(hello.children[0].style.display == "block"){
//         hello.children[0].style = "display: none";
//     }
// })

// console.log(hello)

window.addEventListener("click", function (e) {
  if (e.target == hello) {
    if (hello.children[0].style.display == "block") {
      hello.children[0].style = "display: none";
    } else {
      hello.children[0].style = "display: block";
    }
  } else{
    hello.children[0].style = "display: none";
  }
});


// if (hello.children[0].style.display == "block") {
//     window.addEventListener("click",function(){

//     })
//   }

// for (let i = 12; i < bye.length; i++) {
//     console.log(bye[i].cloneNode(false))
//     let bat = bye[i].cloneNode(false)
//     bat.addEventListener("click",function(){
//         if (hello.children[0].style.display == "block") {
//             hello.children[0].style = "display: none";
//         }
//     })
// }
