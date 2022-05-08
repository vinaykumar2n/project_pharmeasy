var searchedItem=JSON.parse(localStorage.getItem("searchedItem"))
    display(searchedItem);

    function display(data){
    document.querySelector("#pronameafterhome").innerText=data.name
    document.querySelector("title").innerText=data.name
    var imgbox=document.createElement("div")
    imgbox.setAttribute("id","imgbox")

    var image=document.createElement("img");
    image.setAttribute("src",data.image_url)
    image.style.maxHeight="100%"
    image.style.maxWidth="100%"

    imgbox.append(image);
    document.querySelector("#proddisplay").append(imgbox)

    // appended image to imgbox and imgbox to #proddisplay

    var prodbox=document.createElement("div");
    prodbox.setAttribute("id","prodbox")
    
    var prodname=document.createElement("h3");
    prodname.innerText=data.name;
    prodname.setAttribute("id","Pname")

    var prodmfg=document.createElement("p");
    prodmfg.innerText=data.mfgby;
    prodmfg.setAttribute("id","Pmfg")

    var proddes=document.createElement("p");
    proddes.innerText=data.description;
    proddes.setAttribute("id","Pdes");

    var pricediv=document.createElement("div")
    pricediv.setAttribute("id","pricediv")
    
    
       
    
    var price=document.createElement("div");

    var amount=document.createElement("span");
    amount.innerText=`Rs.` 
    var prodprice=document.createElement("p");
    prodprice.innerText=data.price;
    prodprice.setAttribute("id","Pprice")
    price.append(amount,prodprice)
    

    var prodstriked=document.createElement("p");
    prodstriked.innerText=data.strikedoffprice;
    prodstriked.setAttribute("id","Pstriked")

    pricediv.append(price,prodstriked)
    
    var tax=document.createElement("p");
    tax.innerText="Inclusive of all taxes";
    tax.setAttribute("id","Ptax")

    var cartandqtydiv=document.createElement("div");
    cartandqtydiv.setAttribute("id","cartandqty")

    var cartbutton=document.createElement("button");
    cartbutton.innerText="Add to Cart";
    cartbutton.setAttribute("id","cartbtn");
    cartbutton.addEventListener("click",function(){
        addingtocart(data)
    })

    var qty=document.createElement("select")
    qty.setAttribute("id","filterQuantity")
    qty.innerHTML= `<option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6 <span>Max Qty</span></option>`
    qty.addEventListener("change",function(){
        qtychange(data,qty)
    })

    var delivery=document.createElement("div");
    delivery.setAttribute("id","delivery")
    delivery.innerHTML="<p>Delivery by <span>Tomorrow, before 10pm<span></p>"
    cartandqtydiv.append(cartbutton,qty)
    prodbox.append(prodname,prodmfg,proddes,pricediv,tax,cartandqtydiv,delivery)
    document.querySelector("#proddisplay").append(prodbox)
}

var cartData=JSON.parse(localStorage.getItem("cartData")) ||[];

function qtychange(data,qty){
    data.quantity=qty.value;
}

var c
function addingtocart(data){
    c=cartData.find(function(ele){
        return data.uniqueid==ele.uniqueid
    })
    console.log(c)
    if(c)
    {
        alert("Already added to cart")
    }
    else{
        cartData.push(data);
        localStorage.setItem("cartData",JSON.stringify(cartData))
        document.querySelector("#additemdisplay button").style.backgroundColor="rgb(16,132,126)"
        document.querySelector("#additemdisplay>div").innerHTML=`<span></span><p>Item(s) in Cart</p>`
        document.querySelector("#additemdisplay>div>span").innerText=cartData.length
    }  

}

if(cartData.length>0)
{
    document.querySelector("#additemdisplay button").style.backgroundColor="rgb(16,132,126)"
        document.querySelector("#additemdisplay>div").innerHTML=`<span></span><p>Item(s) in Cart</p>`
        document.querySelector("#additemdisplay>div>span").innerText=cartData.length
}

function viewcartfun(){
    window.location.href="../cartvinayandshubham/index.html"
}
