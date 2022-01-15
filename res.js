
// var cate = document.getElementsById("")

var accBody = document.getElementById("mobAccount")
var mobBody = document.getElementById("mobBodyContent")

function catePage(){
    window.location.href="category.html"
    accBody.style.display="none"
}

function home(){
    window.location.href="index.html"
    accBody.style.display="none"
}

function mobAccountCate(){
    window.location.href="index.html"
    mobBody.style.display="none"
    accBody.style.display="block"
    
}

function mobAccountShow(){
    mobBody.style.display="none"
    accBody.style.display="block"
}