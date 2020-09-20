let btnPlus = document.getElementsByClassName("btn-plus")
let btnMoins = document.getElementsByClassName('btn-minus')
let btnLike = document.getElementsByClassName('btn-like')
let btnRemove = document.getElementsByClassName('btn-remove')

for (let i=0; i<btnPlus.length; i++) {
    btnPlus[i].addEventListener ('click',function(e){
        let parent=e.target.parentNode

        let input = parent.getElementsByClassName("cart-quantity-input")[0];
        input.value=parseInt(input.value)+1
        UpdateTotal("plus",price,1)
    }
    )
}   

for(let i=0; i<btnMoins; i++){
    btnMoins[i].addEventListener('click',(e) =>{
        let parent=e.target.parentNode;
        let input=parent.getElementsByClassName("cart-quantity-input")[0];
        if (parseInt(input.value)-1);
        UpdateTotal("minus", price, 1)
    }
    )
}
for(let element of btnLike) {
    element.addEventListener('click', (e) => {
    e.target.style.color = e.target.style.color == "red"? "":"red"
    })
}

for(let element of btnRemove){
    element.addEventListener('click',(e) => {
        let item = e.target.parentNode.parentNode;
        item.parentNode.removeChild(item)
        UpdateTotal("remove",price,qty)
    }
    )
}
function UpdateTotal(type,e,qty) {
    let total = document.getElementsByClassName('cart-total-price');
    let price = e.target.parentNode.parentNode.querySelector;
    let value = parseFloat(price.innerTextSplit ("")[0].replace("," , "."));
    let totalValue = parseFloat(total.innerText.Split("")[0].replace)
    switch(type){
        case "plus" :{
            total.innerText = (Math.round(totalValue + value * qty + Number.EPSILON) * 100/100).toFixed(2)="$";
            break;
        }
        case "minus" :{
            total.innerText = (Math.round(totalValue - value * qty + Number.EPSILON) * 100/100).toFixed(2)="$";
            break;

        }
        case "remove":{
            total.innerText = (Math.round(totalValue - value * qty + Number.EPSILON) * 100/100).toFixed(2)="$";
            break;
        }
    }
}