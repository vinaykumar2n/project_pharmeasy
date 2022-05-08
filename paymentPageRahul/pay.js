


var elements = document.getElementsByClassName("linkwallet");

var myFunction = function() {
    alert("Payment Successful");
    window.location.href = "paysuccess.html";
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction);
}


    // Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");


    
    // Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
    
    
    // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
    
    // When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

    
    
    // When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
    
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
         modal.style.display = "none";
    }
}


// btn2.onclick = function() {
//     modal2.style.display = "block";
// }
    
    //When the user clicks on <span> (x), close the modal
// span2.onclick = function() {
//     modal2.style.display = "none";
// }
    
    //When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


var cartAmount=JSON.parse(localStorage.getItem("totalamt"));
document.querySelector("#cartPrice").innerText=cartAmount;

var stike=JSON.parse(localStorage.getItem("strikedtotal"));
document.querySelector("#strike").innerText=stike;
document.querySelector("#strike").style.marginRight="10px"

var totalBill=JSON.parse(localStorage.getItem("totalBill"));
document.querySelector("#totalbillpaid").innerText=totalBill;

