
// slide progress

const slider = document.querySelector("#myRange");

slider.addEventListener("input", ()=>{
    slider.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%)' + slider.value * 100 / slider.max + '%, hsl(224, 65%, 95%) ' + slider.value + '%, hsl(224, 65%, 95%) 100%)'
});


// Page view and pricing totals


const views = document.querySelector("#views");
const price = document.querySelector("#price");


slider.addEventListener("input", updatePrice)

// switches the toggle
// 25% discount 

const swit = document.querySelector("#switcher");
swit.addEventListener("click", updatePrice);


function updatePrice() {
    if(slider.value == 0){
        if(swit.checked == true){
            price.innerHTML = `$${(8 - (8 * .25))}.00`;
            views.innerHTML = `10k`;
            return;
        } else {
            views.innerHTML = `10k`;
            price.innerHTML = `$${8}.00`;
        }
    }

    if(slider.value == 25){
        if(swit.checked == true){
            price.innerHTML = `$${(12 - (12 * .25))}.00`;
            views.innerHTML = `50k`;
            return;
        } else {
            views.innerHTML = `50k`;
            price.innerHTML = `$${12}.00`;
        }
    }

    if(slider.value == 50){
        if(swit.checked == true){
            price.innerHTML = `$${(16 - (16 * .25))}.00`;
            views.innerHTML = `100k`;
            return;
        } else {
            views.innerHTML = `100k`;
            price.innerHTML = `$${16}.00`;
        }
    }

    if(slider.value == 75){
        if(swit.checked == true){
            price.innerHTML = `$${(24 - (24 * .25))}.00`;
            views.innerHTML = `500k`;
            return;
        } else {
            views.innerHTML = `500k`;
            price.innerHTML = `$${24}.00`;
        }
    }

    if(slider.value == 100){
        if(swit.checked == true){
            price.innerHTML = `$${(36 - (36 * .25))}.00`;
            views.innerHTML = `1M`;
            return;
        } else {
            views.innerHTML = `1M`;
            price.innerHTML = `$${36}.00`;
        }
    }
}

