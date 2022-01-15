
var cartData = JSON.parse(localStorage.getItem("nykaaCartDataNew")) || [];

//Function for showing products in cart

function emptyCartDataShow() {
    document.getElementById("buyBtn").style.display = "none";

    document.getElementById("cartMid").innerHTML = "";
    document.querySelector("#cartfotter").innerHTML = ``;
    document.querySelector("#cartfotter2").innerHTML = ``;

    var emptyCart = document.createElement("div");
    emptyCart.setAttribute("class", "emptyCard");
    var img = document.createElement("img");
    img.setAttribute("src", "https://www.nykaafashion.com/v2/checkout/static/media/empty-cart.78c27941.png");
    img.setAttribute("class", "emptyCardImg");
    var h2 = document.createElement("h2");
    h2.setAttribute("class", "emptyCardHed");
    h2.textContent = "Your shopping bag is empty!";
    var p = document.createElement("p");
    p.setAttribute("class", "emptyCardDes");
    p.textContent = "Looks like you haven’t added anything to your bag. Let’s change that.";
    var emptyCartBtn = document.createElement("button");
    emptyCartBtn.setAttribute("class", "emptyCardBtn");
    emptyCartBtn.textContent = "Back to shopping";
    emptyCartBtn.addEventListener("click", function () {
        window.location.href = "women.html";
    })
    emptyCart.append(img, h2, p, emptyCartBtn)
    document.getElementById("cartMid").append(emptyCart);

}
if (!cartData.length) {
    emptyCartDataShow();
}

showData(cartData);

function showData(cartData) {
    cartData.map(function (item) {
        var cartCart = document.createElement("div");
        cartCart.setAttribute("class", "cartItemCard");

        var itemDiv = document.createElement("div");
        itemDiv.setAttribute("class", "cartCardDetail");

        var anchorTag = document.createElement("a");
        anchorTag.setAttribute("class", "cartImgA");
        var img = document.createElement("img");
        img.setAttribute("src", item.imageURL)
        img.style.height = "128px";
        img.style.width = "96px";
        anchorTag.append(img);

        //detaildivStart
        var detailDiv = document.createElement("div");
        detailDiv.setAttribute("class", "detailDiv");

        var cardTitle = document.createElement("div");
        cardTitle.setAttribute("class", "cardTitle");
        cardTitle.textContent = item.name + item.desc;
        var cartColor = document.createElement("cartColor");
        cartColor.setAttribute("class", "cartColor");
        cartColor.textContent = item.color;
        var qtyDiv = document.createElement("div");
        qtyDiv.setAttribute("class", "qtyDiv");
        var qtySpan = document.createElement("span");
        qtySpan.setAttribute("class", "qtySpan");
        qtySpan.innerHTML = `Quantity - ${item.qty}`;
        qtyDiv.append(qtySpan);
        var priceDiv = document.createElement("div");
        priceDiv.setAttribute("class", "priceDiv");
        priceDiv.innerHTML = `₹${item.newPrice}`;
        var oldPriceSpan = document.createElement("span");
        oldPriceSpan.setAttribute("class", "oldPriceDiv");
        oldPriceSpan.innerHTML = `₹${item.oldPrice}`;
        var offSpan = document.createElement("span");
        offSpan.setAttribute("class", "offDiv");
        offSpan.innerHTML = `${item.off}% off`;
        // start of delivery div
        var deliveryDiv = document.createElement("div");
        deliveryDiv.setAttribute("class", "deliveryDiv");

        var deliveryTitleSpan = document.createElement("span");
        deliveryTitleSpan.setAttribute("class", "deliveryTitle");
        deliveryTitleSpan.textContent = "Delivers by 21 Nov";

        deliveryDiv.innerHTML =
            `<span class="deliveryTitle">Delivers by 21 Nov</span>
        <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class=""
        ><path
          d="M1.45455 0C0.650909 0 0 0.650909 0 1.45455V9.45455H1.45455C1.45455 10.6596 2.43127 11.6364 3.63636 11.6364C4.84145 11.6364 5.81818 10.6596 5.81818 9.45455H9.45455H10.1818C10.1818 10.6596 11.1585 11.6364 12.3636 11.6364C13.5687 11.6364 14.5455 10.6596 14.5455 9.45455H15.2727H16V5.81818L14.0185 1.85653C13.8956 1.60999 13.645 1.45455 13.3693 1.45455H10.9091V0H1.45455ZM1.45455 1.45455H9.45455V4.36364V5.81818V8H5.25142C4.85209 7.55685 4.27994 7.27273 3.63636 7.27273C2.99279 7.27273 2.42063 7.55685 2.02131 8H1.45455V1.45455ZM10.9091 2.90909H12.919L13.6463 4.36364H10.9091V2.90909ZM10.9091 5.81818H14.3736L14.5455 6.16193V6.54546V7.53267V8H13.9787C13.5794 7.55685 13.0072 7.27273 12.3636 7.27273C11.8021 7.27273 11.2957 7.49108 10.9091 7.83949V6.93608V6.54546V5.81818ZM3.63636 8.54546C4.13745 8.54546 4.54545 8.95346 4.54545 9.45455C4.54545 9.95564 4.13745 10.3636 3.63636 10.3636C3.13527 10.3636 2.72727 9.95564 2.72727 9.45455C2.72727 8.95346 3.13527 8.54546 3.63636 8.54546ZM12.3636 8.54546C12.8647 8.54546 13.2727 8.95346 13.2727 9.45455C13.2727 9.95564 12.8647 10.3636 12.3636 10.3636C11.8625 10.3636 11.4545 9.95564 11.4545 9.45455C11.4545 8.95346 11.8625 8.54546 12.3636 8.54546Z"
          fill="#001325"
          fill-opacity="0.64"
          ></path>
        </svg>`;
        // <span class="material-icons"> delete_sweep </span>
        //   End of delivery div

        detailDiv.append(cardTitle, cartColor, qtyDiv, priceDiv, oldPriceSpan, offSpan, deliveryDiv)
        // End of Detail div

        // button div start
        var dotBtn = document.createElement("button");
        dotBtn.setAttribute("class", "dotBtn");
        dotBtn.innerHTML =
            ` <span class="material-icons" style="color: #FD7685; font-size: 21px"> delete_sweep </span>`;
        // button div end
        dotBtn.addEventListener("click", function () {
            for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].name === item.name && cartData[i].desc === item.desc) {
                    cartData.splice(i, 1);
                }
                break;
            }
            localStorage.setItem("nykaaCartDataNew", JSON.stringify(cartData));
            itemDiv.innerHTML = "";
            if (cartData.length === 0) {
                emptyCartDataShow();
            } else {
                cartCalculation();
                window.location.reload();
            }
        })
        itemDiv.append(anchorTag, detailDiv, dotBtn);
        cartCart.append(itemDiv);
        document.querySelector(".cartDiv").append(cartCart);

    })
}

//Function for Cart pricing 
cartCalculation();
function cartCalculation() {
    var bagTotal = 0;
    var bagDisc = 0;
    var subTotal = 0;
    var shippingCharges = 0;

    if (cartData.length > 0) {
        for (var i = 0; i < cartData.length; i++) {
            bagTotal += Number(cartData[i].oldPrice) * cartData[i].qty;
            bagDisc += (Number(cartData[i].oldPrice) * cartData[i].qty - Number(cartData[i].newPrice) * cartData[i].qty);
            subTotal += Number(cartData[i].newPrice) * cartData[i].qty;
        }
    }
    if (subTotal < 1000) {
        shippingCharges = 150;
    }
    console.log(shippingCharges)
    var totalPay = subTotal + shippingCharges;

    var priceObj = {
        totalPrice: bagTotal,
        totalDisc: bagDisc,
        finalTotal: subTotal,
        shippingCharge: shippingCharges,
        finalPay: totalPay,
        couponDisc: 0,
    }

    localStorage.setItem("cartPricing", JSON.stringify(priceObj));

    // Showing cart pricing

    if (cartData.length > 0) {
        document.getElementById("cartfotter2").innerHTML = `View Details`;
        document.getElementById("cartfotter").innerHTML = ` Total ₹ ${totalPay}`
    };
    document.querySelector(".priceSummaryList>li:nth-child(1)>dd").innerHTML = `₹${bagTotal}`;
    document.querySelector(".priceSummaryList>li:nth-child(2)>dd").innerHTML = `-₹${bagDisc}`;
    document.querySelector(".priceSummaryList>li:nth-child(3)>dd").innerHTML = `₹${subTotal}`;
    document.querySelector(".priceSummaryList>li:nth-child(4)>dd").innerHTML = `₹${shippingCharges}`;

    document.querySelector(".priceSummaryTotal>.priceSValue").innerHTML = `₹${totalPay}`;
    document.querySelector(".savedDiv").innerHTML = `You saved ₹${bagDisc} on this purchase.`


    // function for apply coupon
    document.querySelector(".couponTitleDIv").addEventListener("click", apply);
    function apply() {
        document.querySelector(".offerShow").style.display = "block";
    }

    // Function for adding cuopon
    document.querySelector(".offerShow").addEventListener("click", coupon)
    function coupon() {
        if (totalPay > 2000 && document.querySelector(".couponTitle").textContent === "Apply Coupon") {
            totalPay = totalPay - totalPay * 0.05;
            document.querySelector(".priceSummaryTotal>.priceSValue").innerHTML = `₹${totalPay}`;
            document.querySelector(".savedDiv").innerHTML = `You saved ₹${bagDisc} + 5% off on this purchase.`
            priceObj.finalPay = totalPay;
            priceObj.couponDisc = 5;
            localStorage.setItem("cartPricing", JSON.stringify(priceObj));
            document.querySelector(".couponTitleDIv").innerHTML = `<h5 style="color: green; font-weight: bold">Coupon Applied for 5% off<h5>`;
            document.querySelector(".applyCoupon").style.border = "1px solid green";
            document.querySelector(".offerShow").style.display = "none";
            document.querySelector(".applyCoupon svg").setAttribute("stroke", "green");
            document.querySelector(".couponTitleDIv+svg").setAttribute("stroke", "green");
            document.getElementById("cartfotter").innerHTML = `Total ₹ ${totalPay}`;
        } else {
            document.querySelector(".couponTitleDIv").innerHTML = `<h5 style="color: red; font-weight: bold">Coupon for ₹2000 & more  off<h5>`;
        }
    }

    // Proceed to buy
    document.getElementById("buyBtn").addEventListener("click", function () {
        window.open("address.html", "_blank");
    })

}
