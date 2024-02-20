const namel = [];
const countl = [];
const pricel = [];

function add(name, price){
    let ind=0;
    if (namel.includes(name)){
        console.log("yes");
        countl[namel.indexOf(name)] += 1;
        pricel[namel.indexOf(name)] = price*countl[namel.indexOf(name)];
        display();
    }
    else{
        namel.push(name);
        pricel.push(price);
        countl.push(1);
        display();
    }
    const total = document.getElementById('total');
    total.innerHTML = "Total = ₹"+sumArray(pricel);
    
}

function display(){
    var cartItemsDiv = document.getElementById("cartitems");
    cartItemsDiv.innerHTML = "";
    namel.forEach((n, i) =>{
        var p = document.createElement('p');
        p.textContent = namel[i] + " x " + countl[i] + " - ₹" + pricel[i];
        cartItemsDiv.appendChild(p);
    })
}

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}