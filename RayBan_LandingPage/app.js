// alert()

// var h1s = document.querySelectorAll("h1")
// var index = 0

// document.querySelector("#main").addEventListener("click", function () {
//     gsap.to(h1s[index], {
//         top: "-=100%",
//         ease: Expo.easeInOut,
//         duration: 1

//     })
// })

var h1s = document.querySelectorAll("h1");
var index = 0;

document.querySelector("#main").addEventListener("click", function () {
  if (index < h1s.length) { // Check if we haven't reached the end
    gsap.to(h1s[index], {
      top: "-=100%",
      ease: Expo.easeInOut,
      duration: 1,
      onComplete: function() { // Callback function after animation
        index++; // Increment index for next element
      }
    });
  } else {
    // All elements have been animated (optional: reset index)
    index = 0;
  }
});