
var payData = JSON.parse(localStorage.getItem("cartPricing"));

document.querySelector(".payvalue>div:nth-child(1)>p").innerHTML = `₹ ${payData.totalPrice}`;
document.querySelector(".payvalue>div:nth-child(2)>p").innerHTML = `₹ ${payData.totalDisc}`;
document.querySelector(".payvalue>div:nth-child(3)>p").innerHTML = `₹ ${payData.finalTotal}`;
document.querySelector(".payvalue>div:nth-child(4)>p").innerHTML = `₹ ${payData.shippingCharge}`;
document.querySelector(".payvalue>h4").innerHTML = `₹ ${payData.finalPay}`;
document.querySelector(".ordersave>p").innerHTML = `You saved ₹ ${payData.totalDisc}  on this purchase.`;
if (payData.couponDisc > 0) {
    // payData.finalPay = payData.finalPay - (payData.finalPay*(payData.couponDisc/100));
    document.querySelector(".payvalue>h4").innerHTML = `₹ ${payData.finalPay}`;
    var head = document.querySelector(".paylist");
    var div = document.createElement("div");
    div.innerHTML = `<div style="font-size: 13px; font-weight: bold; color: green; margin-top: 20px">Applied ${payData.couponDisc}% off<div>`;
    head.append(div);
}



// Function for actions on clicking save button
document.getElementById("saveadd").addEventListener("click", saveFun);
function saveFun(event) {
    event.preventDefault();

    var country = form.country.value;
    var addLine1 = form.addLine1.value;
    var addLine2 = form.addLine2.value;
    var pin = form.pin.value;
    var fullName = form.fullName.value;
    var mobNo = form.mobNo.value;
    var mail = form.mail.value;

    var addObj = {
        country: country,
        addLine1: addLine1,
        addLine2: addLine2,
        pin: pin,
        fullName: fullName,
        mobNo: mobNo,
        mail: mail,
    }
    localStorage.setItem("addressData", JSON.stringify(addObj));
    document.querySelector("#ptb").style.display = "block";
}
document.querySelector("#ptb").addEventListener("click", proceedFun);
function proceedFun() {
    window.location.href = "payment.html";
}

