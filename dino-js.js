// ----------------first slider js-------------------
function responsiveSlider() {
    var slider = document.querySelector("#dino-container");
    var sliderWidth = slider.offsetWidth / 6;
    
    
    var slideList = document.querySelector("#dino-slider");

    var count = 1;

    function prevSlide() {
      if (count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";

        document.getElementById("next").style.color="rgb(245, 245, 245)"

        count++;
      }else{
        document.getElementById("prev").style.color="rgb(206, 206, 206)"
    }
    }
    function nextSlide() {
      if (count < 6) {
        slideList.style.left = "-" + count * sliderWidth + "px";

        document.getElementById("prev").style.color="rgb(245, 245, 245)"
        count++;
      }else{
        document.getElementById("next").style.color="rgb(206, 206, 206)"
    } 
    }
    prev.addEventListener("click", prevSlide);
    next.addEventListener("click", nextSlide);

  }

  window.onload = function () {
    
  };


   // ----------------------second slider js-------------------
 function smartSlider() {
  var slide = document.querySelector("#dino-container2");
  var slideWidth = slide.offsetWidth / 6;

  var sliderList = document.querySelector(".dino-slider");

  var count = 1;

  function prevSlide2() {
    if (count > 1) {
      count = count - 2;
      sliderList.style.left = "-" + count * slideWidth + "px";

      document.getElementById("next2").style.color="rgb(245, 245, 245)"
      count++;
    }else{
        document.getElementById("prev2").style.color="rgb(206, 206, 206)"
    }
  }
  function nextSlide2() {
    if (count < 8) {
      sliderList.style.left = "-" + count * slideWidth + "px";
      document.getElementById("prev2").style.color="rgb(245, 245, 245)"
      count++;
    }else{
        document.getElementById("next2").style.color="rgb(206, 206, 206)"
    }
  }
  prev2.addEventListener("click", prevSlide2);
  next2.addEventListener("click", nextSlide2);
}

window.onload = function () {
  smartSlider();
  responsiveSlider();
};


 