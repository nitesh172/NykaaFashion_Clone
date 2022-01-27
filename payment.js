var payData = JSON.parse(localStorage.getItem("cartPricing"));
console.log(payData)
document.querySelector(
  ".box2>div:nth-child(1)"
).innerHTML = `₹ ${payData.totalPrice}`;
document.querySelector(
  ".box2>div:nth-child(2)"
).innerHTML = `₹ ${payData.finalTotal}`;
document.querySelector(
  ".box2>div:nth-child(3)"
).innerHTML = `₹ ${payData.totalDisc}`;
document.querySelector(
  ".box2>div:nth-child(4)"
).innerHTML = `₹ ${payData.shippingCharge}`;
document.querySelector(
  ".box2>div:nth-child(5)"
).innerHTML = `₹ ${payData.finalPay}`;
if (payData.couponDisc > 0) {
  payData.finalPay =
    payData.finalPay -
    Math.floor(payData.finalPay * (payData.couponDisc / 100));
  document.querySelector(
    ".box2>div:nth-child(5)"
  ).innerHTML = `₹ ${payData.finalPay}`;
  document.querySelector(
    ".box1>div:nth-child(6)"
  ).innerHTML = `<div style="font-size:20px;">Grand Total   <div style="font-size:13px; font-weight:bold; color:green; display:block;">Applied ${payData.couponDisc}% off</div></div>`;
}

// Showing shipping details

var addData = JSON.parse(localStorage.getItem("addressData"));
console.log(addData)
document.querySelector("#shippingInfo > h5").textContent = addData.fullName;
document.querySelector("#shippingInfo > h6").textContent = addData.mobNo;
var addDiv = document.querySelector("#shippingInfo > p")
addDiv.textContent =
  addData.country + "  " + addData.addLine1 + " " + addData.addLine2 + addData.pin;


// Pay now button function 
document.getElementById("payNow").addEventListener("click", function () {
  document.querySelector(".credit-container1").style.display = "none";
  document.getElementById("orderPlaced").style.display = "block";
  document.querySelector(".credit-container").style.display = "none";
  document.querySelector(".payT").textContent = "";

})
//continue shopping button
document.querySelector("#orderPlaced>*:nth-child(4)").addEventListener("click", function () {
  localStorage.removeItem("nykaaCartDataNew");
  window.location.href = "women.html";
})