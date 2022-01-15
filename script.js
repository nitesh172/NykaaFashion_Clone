var scrollBtn = document.querySelector("#scrollTop");
scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
var scartfotter2 = document.querySelector("#cartfotter2");
window.addEventListener("scroll", () => {
  var scrollable = 190;
  var scrolled = window.scrollY;
  if (Math.ceil(scrolled) >= scrollable) {
    scrollBtn.style.visibility = "visible";
    scrollBtn.style.transition = "all 0.82s ease";
  } else {
    scrollBtn.style.visibility = "hidden";
    scrollBtn.style.transition = "all 0.2s ease";
  }
});

var banner1 = document.getElementById("banner");
var womenS = document.getElementById("Women");
var subMenu = document.getElementById("subMenu");
var More = document.getElementById("More");
subMenu.style.display = "none";
More.addEventListener("mouseenter", function () {
  womenS.style.borderBottom = "none";
  womenS.style.color = "black";
});

womenS.addEventListener("mouseenter", function () {
  if (subMenu.style.display === "none") {
    subMenu.style.display = "flex";
    womenS.style.color = "#fd7685";
  } else {
    subMenu.style.display = "none";
  }
});

//Jayesh watchPics slider js
function responsivewatchSlider() {
  var slideList = document.querySelector("#sliderwatch");

  var count = 1;

  function prevwatchSlide() {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * 330 + "px";

      document.getElementById("nextwatch").style.opacity = 1;

      count++;
    } else {
      document.getElementById("prevwatch").style.opacity = 0.5;
    }
  }
  function nextwatchSlide() {
    if (count < 4) {
      slideList.style.left = "-" + count * 330 + "px";

      document.getElementById("prevwatch").style.opacity = 1;
      count++;
    } else {
      document.getElementById("nextwatch").style.opacity = 0.5;
    }
  }
  document
    .getElementById("prevwatch")
    .addEventListener("click", prevwatchSlide);
  document
    .getElementById("nextwatch")
    .addEventListener("click", nextwatchSlide);
}

// jayesh jewellar js
function responsiveJkSlider() {
  var slideList = document.querySelector("#sliderjk");

  var count = 1;

  function prevJkSlide() {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * 330 + "px";

      document.getElementById("nextjk").style.opacity = 1;

      count++;
    } else {
      document.getElementById("prevjk").style.opacity = 0.5;
    }
  }
  function nextJkSlide() {
    if (count < 6) {
      slideList.style.left = "-" + count * 330 + "px";

      document.getElementById("prevjk").style.opacity = 1;
      count++;
    } else {
      document.getElementById("nextjk").style.opacity = 0.5;
    }
  }
  document.getElementById("prevjk").addEventListener("click", prevJkSlide);
  document.getElementById("nextjk").addEventListener("click", nextJkSlide);
}

// jayesh jewellay end

// dinesh js ================

// ----------------first slider js-------------------
function responsiveSlider() {
  var slideList = document.querySelector("#dino-slider");

  var count = 1;

  function prevSlide() {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * 265 + "px";

      document.getElementById("next").style.opacity = 1;

      count++;
    } else {
      document.getElementById("prev").style.opacity = 0.5;
    }
  }
  function nextSlide() {
    if (count < 5) {
      slideList.style.left = "-" + count * 265 + "px";

      document.getElementById("prev").style.opacity = 1;
      count++;
    } else {
      document.getElementById("next").style.opacity = 0.5;
    }
  }
  prev.addEventListener("click", prevSlide);
  next.addEventListener("click", nextSlide);
}

// ----------------------second slider js-------------------
function smartSlider() {
  var sliderList = document.querySelector(".dino-slider");

  var count = 1;

  function prevSlide2() {
    if (count > 1) {
      count = count - 2;
      sliderList.style.left = "-" + count * 300 + "px";

      document.getElementById("next2").style.opacity = 1;
      count++;
    } else {
      document.getElementById("prev2").style.opacity = 0.5;
    }
  }
  function nextSlide2() {
    if (count < 6) {
      sliderList.style.left = "-" + count * 300 + "px";
      document.getElementById("prev2").style.opacity = 1;
      count++;
    } else {
      document.getElementById("next2").style.opacity = 0.5;
    }
  }
  prev2.addEventListener("click", prevSlide2);
  next2.addEventListener("click", nextSlide2);
}

// dinesh js end==============

//---------------------sonali----------------------------------

//------jwellery--slider----//
function sonaSlider() {
  var sliderListS = document.querySelector(".sona-slider");

  var count = 1;

  function prevSliderS() {
    if (count > 1) {
      count = count - 2;
      sliderListS.style.left = "-" + count * 300 + "px";

      document.getElementById("nextS").style.opacity = 1;
      count++;
    } else {
      document.getElementById("prevS").style.opacity = 0.5;
    }
  }
  function nextSliderS() {
    if (count < 5) {
      sliderListS.style.left = "-" + count * 300 + "px";
      document.getElementById("prevS").style.opacity = 1;
      count++;
    } else {
      document.getElementById("nextS").style.opacity = 0.5;
    }
  }
  prevS.addEventListener("click", prevSliderS);
  nextS.addEventListener("click", nextSliderS);
}

//--------footwear-slider--------//

function sonaSlider1() {
  var sliderListS1 = document.querySelector(".sona-slider1");

  var count = 1;

  function prevSlideS1() {
    if (count > 1) {
      count = count - 2;
      sliderListS1.style.left = "-" + count * 300 + "px";

      document.getElementById("nextS1").style.opacity = 1;
      count++;
    } else {
      document.getElementById("prevS1").style.opacity = 0.5;
    }
  }
  function nextSlideS1() {
    if (count < 5) {
      sliderListS1.style.left = "-" + count * 300 + "px";
      document.getElementById("prevS1").style.opacity = 1;
      count++;
    } else {
      document.getElementById("nextS1").style.opacity = 0.5;
    }
  }
  prevS1.addEventListener("click", prevSlideS1);
  nextS1.addEventListener("click", nextSlideS1);
}

//--------handbags-slider--------//

function sonaSlider2() {
  var sliderListS2 = document.querySelector(".sona-slider2");

  var count = 1;

  function prevSlideS2() {
    if (count > 1) {
      count = count - 2;
      sliderListS2.style.left = "-" + count * 300 + "px";

      document.getElementById("nextS2").style.opacity = 1;
      count++;
    } else {
      document.getElementById("prevS2").style.opacity = 0.5;
    }
  }
  function nextSlideS2() {
    if (count < 5) {
      sliderListS2.style.left = "-" + count * 300 + "px";
      document.getElementById("prevS2").style.opacity = 1;
      count++;
    } else {
      document.getElementById("nextS2").style.opacity = 0.5;
    }
  }
  prevS2.addEventListener("click", prevSlideS2);
  nextS2.addEventListener("click", nextSlideS2);
}

//--------lingerie-slider--------//

function sonaSlider3() {
  var sliderListS3 = document.querySelector(".sona-slider3");

  var count = 1;

  function prevSlideS3() {
    if (count > 1) {
      count = count - 2;
      sliderListS3.style.left = "-" + count * 300 + "px";

      document.getElementById("nextS3").style.opacity = 1;
      count++;
    } else {
      document.getElementById("prevS3").style.opacity = 0.5;
    }
  }
  function nextSlideS3() {
    if (count < 5) {
      sliderListS3.style.left = "-" + count * 300 + "px";
      document.getElementById("prevS3").style.opacity = 1;
      count++;
    } else {
      document.getElementById("nextS3").style.opacity = 0.5;
    }
  }
  prevS3.addEventListener("click", prevSlideS3);
  nextS3.addEventListener("click", nextSlideS3);
}

//--------Editors-slider--------//

function sonaSlider4() {
  var sliderListS4 = document.querySelector(".sona-slider4");

  var count = 1;

  function prevSlideS4() {
    if (count > 1) {
      count = count - 2;
      sliderListS4.style.left = "-" + count * 450 + "px";

      document.getElementById("nextS4").style.opacity = 1;
      count++;
    } else {
      document.getElementById("prevS4").style.opacity = 0.5;
    }
  }
  function nextSlideS4() {
    if (count < 2) {
      sliderListS4.style.left = "-" + count * 450 + "px";
      document.getElementById("prevS4").style.opacity = 1;
      count++;
    } else {
      document.getElementById("nextS4").style.opacity = 0.5;
    }
  }
  prevS4.addEventListener("click", prevSlideS4);
  nextS4.addEventListener("click", nextSlideS4);
}

// saurabh 1st js

// new on nykaa slider

function smartSliderSF() {
  var sliderList = document.querySelector(".S-Slider");

  var count = 1;

  function prevSlidesf() {
    if (count > 1) {
      count = count - 2;
      sliderList.style.left = "-" + count * 300 + "px";

      document.getElementById("nextsf").style.opacity = 1;
      count++;
    } else {
      document.getElementById("prevsf").style.opacity = 0.5;
    }
  }
  function nextSlidesf() {
    if (count < 6) {
      sliderList.style.left = "-" + count * 300 + "px";
      document.getElementById("prevsf").style.opacity = 1;
      count++;
    } else {
      document.getElementById("nextsf").style.opacity = 0.5;
    }
  }
  prevsf.addEventListener("click", prevSlidesf);
  nextsf.addEventListener("click", nextSlidesf);
}

// saurabh js 2

function SFsmartSlider() {
  var sliderList = document.querySelector(".SK1-Slider");

  var count = 1;

  function SFprevSlide() {
    if (count > 1) {
      count = count - 2;
      sliderList.style.left = "-" + count * 300 + "px";

      document.getElementById("NextSF").style.opacity = 1;
      count++;
    } else {
      document.getElementById("PrevSF").style.opacity = 0.5;
    }
  }
  function SFnextSlide() {
    if (count < 6) {
      sliderList.style.left = "-" + count * 300 + "px";
      document.getElementById("PrevSF").style.opacity = 1;
      count++;
    } else {
      document.getElementById("NextSF").style.opacity = 0.5;
    }
  }
  PrevSF.addEventListener("click", SFprevSlide);
  NextSF.addEventListener("click", SFnextSlide);
}
// saurabh js end

// yatharth js start

// radar button
function yetiBanner() {
  var yetiList = document.querySelector("#yetislider");

  var count = 1;

  function prevYVSlide() {
    if (count > 1) {
      count = count - 2;
      yetiList.style.left = "-" + count * 330 + "px";

      document.getElementById("nexty1").style.opacity = 1;

      count++;
    } else {
      document.getElementById("prevy1").style.opacity = 0.5;
    }
  }
  function nextYVSlide() {
    if (count < 6) {
      yetiList.style.left = "-" + count * 330 + "px";

      document.getElementById("prevy1").style.opacity = 1;
      count++;
    } else {
      document.getElementById("nexty1").style.opacity = 0.5;
    }
  }
  document.getElementById("prevy1").addEventListener("click", prevYVSlide);
  document.getElementById("nexty1").addEventListener("click", nextYVSlide);
}

// sport button
function yetiSport() {
  var sportList = document.querySelector(".sport-slider");

  var count = 1;

  function prevSlideYV() {
    if (count > 1) {
      count = count - 2;
      sportList.style.left = "-" + count * 320 + "px";

      document.getElementById("nexty2").style.opacity = 1;
      count++;
    } else {
      document.getElementById("prevy2").style.opacity = 0.5;
    }
  }
  function nextSlideYV() {
    if (count < 5) {
      sportList.style.left = "-" + count * 320 + "px";
      document.getElementById("prevy2").style.opacity = 1;
      count++;
    } else {
      document.getElementById("nexty2").style.opacity = 0.5;
    }
  }
  prevy2.addEventListener("click", prevSlideYV);
  nexty2.addEventListener("click", nextSlideYV);
}

//yatharthjs end

// dinesh js end======================================================
// show and hide dropdown list item on button click

var cartP = document.getElementById("cartPage");
var click = document.getElementById("list-items");

function show_hide() {
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}

function signUp_page() {
  var page = document.getElementById("sign_page");
  document.getElementById("list-items").style.display = "none";
  disableBodyScroll();
  if (page.style.top < "0px") {
    page.style.top = "0px";
    // document.querySelector("body").style.opacity= 0.2;
  }
}

document.getElementById("close").addEventListener("click", function () {
  var page = document.getElementById("sign_page");
  enableBodyScroll();
  if (page.style.top == "0px") {
    page.style.top = "-1000px";
    // document.querySelector("body").style.opacity= 1;
  }
});

document.getElementById("signupBtn").addEventListener("click", function () {
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("accSginUp").style.display = "block";
  document.getElementById("close").style.display = "none";
  document.querySelector(".signUpAndSignInText").textContent =
    "Signup using mobile";
});

document.getElementById("loginBtn").addEventListener("click", function () {
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("accSginUp").style.display = "block";
  document.getElementById("close").style.display = "none";
  document.querySelector(".signUpAndSignInText").textContent =
    "Signin using mobile";
});

document.getElementById("backBtn").addEventListener("click", function () {
  document.getElementById("loginContainer").style.display = "block";
  document.getElementById("loginContainer").style.marginTop = "50px";
  document.getElementById("accSginUp").style.display = "none";
  document.getElementById("close").style.display = "block";
});

document.getElementById("submit").addEventListener("click", function () {
  var numLength = document.querySelector("#mob").value;
  if (numLength.length == 10) {
    document.getElementById(
      "mobNum"
    ).textContent = `Enter the six digit OTP sent to +91-${numLength}`;

    document.getElementById("accSginUp").style.display = "none";
    document.getElementById("close").style.display = "none";
    document.getElementById("backBtn2").style.display = "block";
    document.getElementById("optContainer").style.display = "block";
  } else {
    document.querySelector(".valid").textContent =
      "Mobile number is not valid!";
  }
});

document.getElementById("backBtn2").addEventListener("click", function () {
  document.getElementById("optContainer").style.display = "none";
  document.getElementById("backBtn2").style.display = "none";
  document.getElementById("accSginUp").style.display = "block";
  document.getElementById("backBtn").style.display = "block";
});

document.getElementById("otpBtn").addEventListener("click", function () {
  var otp1 = document.getElementById("ist").value;
  var otp2 = document.getElementById("sec").value;
  var otp3 = document.getElementById("third").value;
  var otp4 = document.getElementById("fourth").value;
  var otp5 = document.getElementById("fifth").value;
  var otp6 = document.getElementById("sixth").value;

  if (
    otp1 == "1" &&
    otp2 == "2" &&
    otp3 == "3" &&
    otp4 == "4" &&
    otp5 == "5" &&
    otp6 == "6"
  ) {
    document.querySelector("#singupShow").style.display = "none";
    document.querySelector("#signOut").style.display = "block";
    document.querySelector(".mobileShow").textContent =
      document.getElementById("mob").value;
    document.getElementById("sign_page").style.display = "none";
  }
});

document.getElementById("logoutBtn").addEventListener("click", function () {
  location.reload(true);
  document.querySelector("#signOut").style.display = "none";
});

function clickEvent(first, last) {
  if (first.value.length) {
    document.getElementById(last).focus();
  }
}

function disableBodyScroll() {
  const element = document.querySelector("body");
  element.classList.add("stop-scroll");
}

function enableBodyScroll() {
  const element = document.querySelector("body");
  element.classList.remove("stop-scroll");
}

// cart page js ======================

document.getElementById("cartBtn").addEventListener("click", function () {
  var cartP = document.getElementById("cartPage");
  disableBodyScroll();
  cartP.style.visibility = "visible";
  cartP.style.right = "0px";
  cartP.style.transition = "all 0.5s ease";
})
var cartP = document.getElementById("cartPage");
document.getElementById("cartBackBtn").addEventListener("click", function () {
  enableBodyScroll();

  cartP.style.right = "-400px";
  cartP.style.transition = "all 0.5s ease";
  cartP.style.visibility = "hidden";
});



// End dropdown menu JS ==============================

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  cartP.style.right = "-400px";
  cartP.style.transition = "all 0.5s ease";
  cartP.style.visibility = "hidden";
} else {
  console.info("This page is not reloaded");
}
// To show no of items in cart on top bag icon
var bagitem = JSON.parse(localStorage.getItem("nykaaCartDataNew")) || [];

if (bagitem.length > 0) {
  document.querySelector(".itemValue").textContent = bagitem.length;
} else {
  document.querySelector(".itemValue").textContent = 0;
}
document.querySelector(".itemValue")

//dont touch below code code above

window.onload = function () {
  smartSlider();
  responsiveSlider();
  sonaSlider();
  sonaSlider1();
  sonaSlider2();
  sonaSlider3();
  sonaSlider4();
  smartSliderSF();
  SFsmartSlider();
  responsiveJkSlider();
  responsivewatchSlider();
  yetiSport();
  yetiBanner();

  // dropHide();
};
