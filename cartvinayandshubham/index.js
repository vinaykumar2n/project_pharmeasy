
// nav bar 
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
 btn.onclick = function () {
   modal.style.display = "block";
 };

 // When the user clicks on <span> (x), close the modal
 span.onclick = function () {
   modal.style.display = "none";
 };

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function (event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 };

 btn2.onclick = function () {
   modal2.style.display = "block";
 };

 // When the user clicks on <span> (x), close the modal
 span2.onclick = function () {
   modal2.style.display = "none";
 };

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function (event) {
   if (event.target == modal2) {
     modal2.style.display = "none";
   }
 };
 document.querySelector("#deliver").style.cursor="pointer"
 document.querySelector("#deliver").addEventListener("click",function(){
   window.location.href="../paymentPageRahul/index.html"
 })
// End of Nav bar---------------------------------------------------------------------

var cartData=JSON.parse(localStorage.getItem("cartData")) || []

var cartquantity= JSON.parse(localStorage.getItem("cartquantity")) || []

display(cartData)
  function display(items){
    document.querySelector("#cartitems").innerHTML=""
    items.map(function(el,i){
      var card=document.createElement("div");
      card.style.display="flex"
      card.setAttribute("class","card")
      
      var imagediv=document.createElement("div")
      imagediv.setAttribute("class","imgdiv");

      var image=document.createElement("img");
      image.setAttribute("src",el.image_url);
      image.setAttribute("class","realimg")

      imagediv.append(image)

      var besideimage=document.createElement("div");
      besideimage.setAttribute("id","besideimage")

      var name=document.createElement("h4");
      name.innerText=el.name;
      name.setAttribute("id","pname")

      var mfgby=document.createElement("h4");
      mfgby.innerText=el.mfgby;
      mfgby.setAttribute("id","pmfgby")

      var description=document.createElement("h4");
      description.innerText=el.description;
      description.setAttribute("id","pdescription")


      var pricediv=document.createElement("div");
      pricediv.setAttribute("id","qandpricediv")
      pricediv.style.display="flex"
      pricediv.style.alignItems="center"

      var qty=document.createElement("select")
      qty.setAttribute("id","selecttagqty")
      qty.innerHTML= `<option value="none">Qty:</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6 <span>Max Qty</span></option>`
      
    qty.addEventListener("change",function(){
        qtychange(el,qty)
    })

      var actualquantity=document.createElement("p");
      actualquantity.setAttribute("id","displayquant")
      actualquantity.innerText=el.quantity
      
      var price=document.createElement("h2");
      price.innerHTML=`Rs.`  
      var amount=document.createElement("span");
      amount.innerText=(el.price*el.quantity).toFixed(2)
      price.append(amount)


      var strike=document.createElement("h4");
      strike.innerHTML=`Rs.`;
      strike.style.textDecoration="line-through"
      strike.style.marginLeft="30px"

      var st=document.createElement("span");
      st.innerText=(el.strikedoffprice*el.quantity).toFixed(2)
      strike.append(st)

      var delivery=document.createElement("div");
      delivery.setAttribute("id","delivery")
      delivery.innerHTML="<p>Delivery by <span>Tomorrow, before 10pm<span></p>"

      
      var del=document.createElement("div")
      del.setAttribute("id","del")
      var deletebtn=document.createElement("img");
      deletebtn.setAttribute("id","delimg")
      deletebtn.setAttribute("src","https://assets.pharmeasy.in/web-assets/dist/2fb50086.svg")
      
      deletebtn.addEventListener("click",function(){
        deletefun(el,i)
      })
      del.append(deletebtn)

      pricediv.append(qty,actualquantity,price,strike);

      besideimage.append(name,mfgby,description,pricediv,delivery)

      card.append(imagediv,besideimage,del);

      document.querySelector("#cartitems").append(card)
    })
  }



function deletefun(el,i){
  cartData.splice(i,1)
  localStorage.setItem("cartData",JSON.stringify(cartData))
  window.location.reload()
}
function qtychange(el,qty){
  el.quantity=qty.value;
  localStorage.setItem("cartData",JSON.stringify(cartData))
  cartData=JSON.parse(localStorage.getItem("cartData")) || []
  display(cartData)
  window.location.reload();
}
var total= cartData.reduce(function(acc,el){
  return acc+(el.price*el.quantity)
},0)
var strikedtotal=cartData.reduce(function(acc,el){
  return acc+(el.strikedoffprice*el.quantity)
},0)
total=total.toFixed(2)
strikedtotal=strikedtotal.toFixed(2)
localStorage.setItem("totalamt",total);
localStorage.setItem("strikedtotal",strikedtotal);

document.querySelector("#cartvalueprice").innerText=total
document.querySelector("#cartvaluestriked").innerText=strikedtotal
document.querySelector("#num").innerText=cartData.length

if(cartData.length>0){
  document.querySelector("#deliverycharge").innerText=84.03
  document.querySelector("#amounttobepaid").innerText=(Number(total)+84.03).toFixed(2)
  var totalbill= (Number(total)+84.03).toFixed(2)
  localStorage.setItem("totalBill",totalbill)
  document.querySelector("#saved").innerText=(strikedtotal-total).toFixed(2)
  document.querySelector("#discounted").innerText=(Number(total)*0.1798).toFixed(2)
}



