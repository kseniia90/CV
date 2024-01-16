"use strict";

if (document.querySelector(".portfolio__list__item") !== null) {

  var portfolioItems = document.getElementsByClassName("portfolio__list__item");
  for (var i = 0; i < portfolioItems.length; i++) {
    portfolioItems[i].onclick = function () {
      var setClasses = !this.classList.contains("active");
      setClass(portfolioItems, "active", "remove");
      if (setClasses) {
        this.classList.toggle("active");
      }
    };
  }
  function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
    }
  }
  // swiper.on("slideChange", function () {
  //   for (var i = 0; i < portfolioItems.length; i++) {
  //     portfolioItems[i].classList.remove("active");
  //   }
  // });
};

