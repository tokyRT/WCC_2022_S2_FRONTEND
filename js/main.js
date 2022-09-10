(function () {
  //overlay loader
  var overlay = document.querySelector("body>.overlay");

  window.addEventListener("load", function () {
    overlay.classList.add("loaded");
  });

  
})();
