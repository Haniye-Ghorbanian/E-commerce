


const SINGLE_PRODUCT_PAGE = document.querySelector('.SINGLE_PRODUCT_PAGE');
const SINGLE_PRODUCT_PAGE_CARD = document.querySelector('.SINGLE_PRODUCT_PAGE_CARD');
const P_BACK_BUTTON = document.querySelector('.P_BACK_BUTTON');







let productId;


function getSingleProductApi(productId) {

    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then((data) => {
            showProductPageContent(data)
            
        })
        .then(() => {
            const PRODUCT_PAGE_CATEGORY_BTN = document.querySelector('.PRODUCT_PAGE_CATEGORY_BTN');
            console.log(PRODUCT_PAGE_CATEGORY_BTN)
            categoryFromProduct(PRODUCT_PAGE_CATEGORY_BTN)
        })
}



// This function renders the product page view
function showProductPageContent(product) {
   
    const singleProductPageCard = ` <!--single product page => image::start -->
    <div class="singleProduct__image text-center w-25 m-5">

        <img src="${product.image}" alt="">

        <!--single product page => description => product_category::start -->

        <!--single product page => description => product_category::end -->

    </div>

    <!--single product page => image::end -->



    <!--single product page => description::start -->


    <div class="singleProduct__info d-flex flex-column w-75">

        <!--single product page => description => product_title::start -->
        <h2 class="singleProduct__info--title mb-5">${product.title}</h2>
        <!--single product page => description => product_title::end -->


        <!--single product page => description => product_description::start -->
        <p class="singleProduct__info--description mb-4">${product.description}</p>
        <!--single product page => description => product_title::end -->


        <!--single product page => description => product_price::start -->
        <span class="singleProduct__info--price">price: ${product.price}$</span>
        <!--single product page => description => product_price::end -->

        <button class="myCard__detailContainer--btn w-30 mt-3">Quick Add</button> 
    </div>

    <!--single product page => description::end -->`

    SINGLE_PRODUCT_PAGE_CARD.innerHTML = (singleProductPageCard);

}









// Controller
function hideAndShowHandler() {
    HOME_PRODUCT_CARDS.forEach((card) => {
        card.addEventListener('click', () => {
            productId = card.getAttribute('data-product-id');
            hideHomePage();
            hideHeader();
            getSingleProductApi(productId);
            showProductPage()
            
        });
    });
}









// Back button for product page


function backToHome() {
    hideProductPage();
    hideCartPage();
    showHeader();
    showHomePage();
}

// function showCategoryProducts(event) {
//     debugger
//     findCategories();
//     hideProductPage();
//     hideCartPage();
//     showHeader();
// }


// controller
P_BACK_BUTTON.addEventListener('click', backToHome)

function categoryFromProduct(button) {
    // button.addEventListener('change', showCategoryProducts)
}






