let btnPlus = document.getElementsByClassName(btn-plus)
let btnMoins = document.getElementsByClassName(btn-minus)
let btnLike = document.getElementsByClassName(btn-like)
let btnRemove = document.getElementsByClassName(btn-remove)

for (let i=0; i<btnPlus.length; i++) {
    btnPlus[i].addEventListener ('click',function(e){
        let parent=e.target.parentNade
        console.log(sibling)
        let input = parent.getElementsByClassName("cart-quantity-input")[0];
        input.value=parseInt(input.value)+1
    }
    )
}   

for(let i=0; i<btnMoins; i++){
    btnMoins[i].addEventListener('click',(e) =>{
        let parent=e.target.parentNode;
        let input=parent.getElementsByClassName("cart-quantity-input")[0];
        if (parseInt(input.value)-1);
    }
    )
}
for(let element of btnLike) {
    Element.addEventListener('click', (e) => {
    e.target.style.color = e.target.style.color == "red"? "":"red"
    })
}

for(let element of btnRemove){
    element.addEventListener('click',(e) =>{
        let parent=0.target.parentNode.parentNode;
        item.parentNode.removeChild(item)
    }
    )
}
