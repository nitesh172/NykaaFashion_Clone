var clickedProductData = JSON.parse(localStorage.getItem("clickedProduct"));
var clicked = JSON.parse(localStorage.getItem("reload"));

if (clicked) {
  var clicked = false;
  localStorage.setItem("reload", JSON.stringify(clicked));

  var cartData = JSON.parse(localStorage.getItem("nykaaCartDataNew")) || [];
  //Function to show the clicked small image in bigger size
  function showClickedImg(link) {
    document.querySelector("#mainImg").setAttribute("src", link);
  }

  //Showing the title with name of clicked product
  document.title = clickedProductData.name + " " + clickedProductData.desc;

  var image1 = document.querySelector(".productSmallImgDiv>div:nth-child(1)>img");
  image1.setAttribute("src", clickedProductData.img1);
  // image1.addEventListener("click", showClickedImg(clickedProductData.img1));
  var image2 = document.querySelector(".productSmallImgDiv>div:nth-child(2)>img");
  image2.setAttribute("src", clickedProductData.img2);
  var image3 = document.querySelector(".productSmallImgDiv>div:nth-child(3)>img");
  image3.setAttribute("src", clickedProductData.img3);
  var image4 = document.querySelector(".productSmallImgDiv>div:nth-child(4)>img");
  image4.setAttribute("src", clickedProductData.img4);

  //showing main image
  var mainImg = document
    .getElementById("mainImg")
    .setAttribute("src", clickedProductData.imageURL);

  //showing product details
  document.querySelector(".productName").textContent = clickedProductData.name;
  document.querySelector(".productDesc").textContent = clickedProductData.desc;
  document.querySelector(
    ".priceSpan"
  ).innerHTML = `<span class="rupeeI">₹<span>${clickedProductData.newPrice}`;
  document.querySelector(
    ".offSpan"
  ).textContent = `${clickedProductData.off} % off`;
  document.querySelector(
    ".oldPiceValue"
  ).innerHTML = `<span class="rupeeI">₹<span>${clickedProductData.oldPrice}`;
  document.querySelector(".addToBagBtn").textContent = "View Bag";
  document.querySelector(".addToBagBtn").style.backgroundColor = "#FD7685";

  document.querySelector(".addToBagBtn").addEventListener("click", show_cart);
  function show_cart() {
    var cartP = document.getElementById("cartPage");
    disableBodyScroll();
    cartP.style.visibility = "visible";
    cartP.style.right = "0px";
    cartP.style.transition = "all 0.5s ease";
  }
  // function goToCart() {
  //   var cartP = document.getElementById("cartPage");
  //   disableBodyScroll();
  //   cartP.style.visibility = "visible";
  //   cartP.style.right = "0px";
  //   cartP.style.transition = "all 0.5s ease";
  // }
  var cartP = document.getElementById("cartPage");
  document.getElementById("cartBackBtn").addEventListener("click", function () {
    enableBodyScroll();

    cartP.style.right = "-400px";
    cartP.style.transition = "all 0.5s ease";
    cartP.style.visibility = "hidden";
  });


  //Showing bag items on nav bar
  var total = 0;
  for (var i = 0; i < cartData.length; i++) {
    total += cartData[i].qty;
  }
  document.querySelector(".itemValue").textContent = total;


} else {
  //Function to show the clicked small image in bigger size
  function showClickedImg(link) {
    document.querySelector("#mainImg").setAttribute("src", link);
  }

  //Showing the title with name of clicked product
  document.title = clickedProductData.name + " " + clickedProductData.desc;

  var image1 = document.querySelector(".productSmallImgDiv>div:nth-child(1)>img");
  image1.setAttribute("src", clickedProductData.img1);
  // image1.addEventListener("click", showClickedImg(clickedProductData.img1));
  var image2 = document.querySelector(".productSmallImgDiv>div:nth-child(2)>img");
  image2.setAttribute("src", clickedProductData.img2);
  var image3 = document.querySelector(".productSmallImgDiv>div:nth-child(3)>img");
  image3.setAttribute("src", clickedProductData.img3);
  var image4 = document.querySelector(".productSmallImgDiv>div:nth-child(4)>img");
  image4.setAttribute("src", clickedProductData.img4);

  //showing main image
  var mainImg = document
    .getElementById("mainImg")
    .setAttribute("src", clickedProductData.imageURL);

  //showing product details
  document.querySelector(".productName").textContent = clickedProductData.name;
  document.querySelector(".productDesc").textContent = clickedProductData.desc;
  document.querySelector(
    ".priceSpan"
  ).innerHTML = `<span class="rupeeI">₹<span>${clickedProductData.newPrice}`;
  document.querySelector(
    ".offSpan"
  ).textContent = `${clickedProductData.off} % off`;
  document.querySelector(
    ".oldPiceValue"
  ).innerHTML = `<span class="rupeeI">₹<span>${clickedProductData.oldPrice}`;

  //Function for adding items to cart

  var cartData = JSON.parse(localStorage.getItem("nykaaCartDataNew")) || [];

  document.querySelector(".addToBagBtn").addEventListener("click", addToCart);
  function addToCart() {
    if (document.querySelector(".addToBagBtn").textContent === "Add to bag") {
      if (cartData.length > 0) {
        var found = false;
        for (var i = 0; i < cartData.length; i++) {
          if (
            clickedProductData.name === cartData[i].name &&
            clickedProductData.desc === cartData[i].desc
          ) {
            cartData[i].qty += 1;
            localStorage.setItem("nykaaCartDataNew", JSON.stringify(cartData));
            found = true;
            break;
          }
        }
        if (found === false) {
          clickedProductData.qty = 1;
          cartData.push(clickedProductData);
          localStorage.setItem("nykaaCartDataNew", JSON.stringify(cartData));
        }
      } else {
        clickedProductData.qty = 1;
        cartData.push(clickedProductData);
        localStorage.setItem("nykaaCartDataNew", JSON.stringify(cartData));
      }
      var clicked = true;
      localStorage.setItem("reload", JSON.stringify(clicked));
      window.location.reload();
      document.querySelector(".addToBagBtn").textContent = "View Bag";
      document.querySelector(".addToBagBtn").style.backgroundColor = "#FD7685";
    } else if (
      document.querySelector(".addToBagBtn").textContent === "View Bag"
    ) {
      var cartP = document.getElementById("cartPage");
      disableBodyScroll();
      cartP.style.visibility = "visible";
      cartP.style.right = "0px";
      cartP.style.transition = "all 0.5s ease";
    }
    //For updating bag items on nav bar everytime when clicked on add to bag
    var total = 0;
    for (var i = 0; i < cartData.length; i++) {
      total += cartData[i].qty;
    }
    document.querySelector(".itemValue").textContent = total;
  }

  //Showing bag items on nav bar
  var total = 0;
  for (var i = 0; i < cartData.length; i++) {
    total += cartData[i].qty;
  }
  document.querySelector(".itemValue").textContent = total;

  // For making size buttons black
  function sizeBtnCol(str) {
    var array = document.querySelectorAll(".sizeSelectBtn");
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === str) {
        array[i].style.backgroundColor = "black";
        array[i].style.color = "white";
      } else {
        (array[i].style.backgroundColor = "white"),
          (array[i].style.color = "black");
      }
    }
  }

  // cart page js ======================

  function show_cart() {
    var cartP = document.getElementById("cartPage");
    disableBodyScroll();
    cartP.style.visibility = "visible";
    cartP.style.right = "0px";
    cartP.style.transition = "all 0.5s ease";
  }
  var cartP = document.getElementById("cartPage");
  document.getElementById("cartBackBtn").addEventListener("click", function () {
    enableBodyScroll();

    cartP.style.right = "-400px";
    cartP.style.transition = "all 0.5s ease";
    cartP.style.visibility = "hidden";
  });

  // if(location.reload(true)){
  //   cartP.style.right = "-400px";
  // }

  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    cartP.style.right = "-400px";
    cartP.style.transition = "all 0.5s ease";
    cartP.style.visibility = "hidden";
  } else {
    console.info("This page is not reloaded");
  }
}

