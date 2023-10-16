let HOME_PRODUCT_CARDS;
const CARDS_CONTAINER = document.querySelector('.CARDS_CONTAINER');



let storedProducts = []

function start() {

    fetch('https://fakestoreapi.com/products')

        .then((res) => {
            if (!res.ok) {
                console.log('HTTP Error: ' + res.status);
                console.log(res)
            }
            return res.json();
        })
        .then((data) => {
            storedProducts = [];
            filteredProducts.length === 0 ? data.map(item => storedProducts.push(item)) : filteredProducts.map(item => storedProducts.push(item));
            showData(data)
            changeDisplay(data)
            hideAndShowHandler()

        })

        .catch(() => {

        })

}



const LARGE_BUTTON = document.querySelector('#largeButton');
const MEDIUM_BUTTON = document.querySelector('#mediumButton');
const SMALL_BUTTON = document.querySelector('#smallButton');


let largeItems = false;
let mediumItems = false;
let smallItems = true;


function changeDisplay() {

   
    LARGE_BUTTON.addEventListener('click', () => {
        largeItems = true;
        mediumItems = false;
        smallItems = false;
        filteredProducts.length === 0 ? start() : displayFilteredProducts();
    });

    MEDIUM_BUTTON.addEventListener('click', () => {
        largeItems = false;
        mediumItems = true;
        smallItems = false;
        filteredProducts.length === 0 ? start() : displayFilteredProducts();
    });

    SMALL_BUTTON.addEventListener('click', () => {
        largeItems = false;
        mediumItems = false;
        smallItems = true;
        filteredProducts.length === 0 ? start() : displayFilteredProducts();
    });

}









function showData(storedProducts) {
    const template = storedProducts.map(product => {
        columnSizeSm = largeItems ? '6' : mediumItems ? '4' : smallItems ? '3' : '3';
        return ` <!-- Single card::start -->

    <div class="myCard d-flex flex-column justify-content-between align-items-center col-sm-${columnSizeSm} col-12 pb-3 pt-3 ps-2 pe-2 mb-5 HOME_PRODUCT_CARD" data-product-id="${product.id}">


        <!-- Single card => Container of card's image::start -->
        <div class="myCard__imgContainer d-flex justify-content-center align-items-center mb-md-4">
   
          <img src="${product.image}">
         
        </div>
        <!-- Single card => Container of image::end -->



        <!-- Single card => Container of card's info::start -->
        <div class="myCard__detailContainer d-flex flex-column justify-content-md-between justify-content-evenly align-items-center  w-100 ">

        
              <h2 class="myCard__detailContainer--title d-flex align-items-center justify-content-center mb-2">${product.title}</h2> 

              <h3 class="myCard__detailContainer--category">${product.category}</h3>


            <div class="myCard__detailContainer--info d-flex justify-content-between align-items-center ">
                <div class="myCard__detailContainer--info--price">Price: ${product.price}</div>
                <div class="myCard__detailContainer--info--rate">Rate: ${product.rating.rate}</div>
            </div> 

            <button class="myCard__detailContainer--btn">Quick Add</button> 


        </div>
        <!-- Single card => Container of card's info::end -->



    </div>

    <!-- Single card::end -->`
    })



    CARDS_CONTAINER.innerHTML = template.join('')
    HOME_PRODUCT_CARDS = Array.from(document.querySelectorAll('.HOME_PRODUCT_CARD'));

}




document.addEventListener('DOMContentLoaded', start())






