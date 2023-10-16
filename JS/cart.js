

const NAV_CART_BUTTON     = document.querySelector('.NAV_CART_BUTTON');
const CART_CONTAINER      = document.querySelector('.CART_CONTAINER');
const CART_BACK_BUTTON    = document.querySelector('.CART_BACK_BUTTON');

function showCart() {
    hideHomePage();
    hideHeader();
    hideProductPage();
    showCartPage();
}


function hdieCart() {
    hideCartPage();
    showHeader();
    showHomePage();
}




let cartProducts = [];
fetch('https://fakestoreapi.com/carts/5')
    .then(res => res.json())
    .then((data) => {
        findCartProducts(data)
    })
    .catch(() => {

    })



let cartProductsArr;

function findCartProducts(cartProducts) {
    
    cartProductsArr = cartProducts.products;
   

    let existingProducts = [];
    

    for (const cartProduct of cartProductsArr) {
        
        const product = storedProducts.find(product => product.id === cartProduct.productId);

        const productQuantity = cartProduct.quantity;

        if (product, productQuantity) {
            existingProducts.push(product);

        }

        // console.log(existingProducts)
    }

    renderCartProducts(existingProducts)

}

function renderCartProducts(products) {
    const cartCardTemp = products.map(product => {
        return `<!-- Cart => products section => one product::start -->
        <div class="cart__products__single d-flex align-items-center justify-content-start w-100 p-3 mb-3">
        
    
            <div class="cart__products__single--image w-10 me-5">
                <img src="${product.image}"
                    alt="">
            </div>
    
    
    
            <div class="cart__products__single--detail d-flex flex-column align-items-start w-50">
    
                <h3 class="cart__products__single--detail--title mb-2">${product.title}</h3>
    
                <span class="cart__products__single--detail--price fw-light">Price: ${product.price}$</span>

            </div>
    
        </div>
        <!-- Cart => products section => one product::end -->`
    } ) 


    CART_CONTAINER.innerHTML = cartCardTemp.join("")
}






NAV_CART_BUTTON.addEventListener('click', showCart)
CART_BACK_BUTTON.addEventListener('click', hdieCart)