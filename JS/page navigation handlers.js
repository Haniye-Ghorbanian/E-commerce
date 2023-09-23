const CART_PAGE     =   document.querySelector('.CART_PAGE');


// This function hides "home page"

function hideHomePage() {
    
    MAIN_HOME.classList.add('d-none');
    MAIN_HOME.classList.remove('z-0');
    MAIN_HOME.classList.add('z-n1');
    
}


// This function hides "header"

function hideHeader() {
    
    HEADER.classList.add('d-none');
    HEADER.classList.remove('z-0');
    HEADER.classList.add('z-n1');
    
}


// This function hides "cart page"

function hideCartPage() {
    
    CART_PAGE.classList.add('d-none');
}


// This function hides single product page

function hideProductPage() {
    
    SINGLE_PRODUCT_PAGE.classList.add('d-none');
    SINGLE_PRODUCT_PAGE.classList.remove('z-0');
    SINGLE_PRODUCT_PAGE.classList.add('z-n1');    

}





// This function displays single product page

function showProductPage() {
    
    SINGLE_PRODUCT_PAGE.classList.remove('d-none');
    
}

// This function displays "header"

function showHeader() {
    
    HEADER.classList.remove('d-none');
    HEADER.classList.add('z-0');
    HEADER.classList.remove('z-n1');
    
}

// This function displays "home page"

function showHeader() {
    
    HEADER.classList.remove('d-none');
    HEADER.classList.add('z-0');
    HEADER.classList.remove('z-n1');
    
}



// This function shows "home page"

function  showHomePage() {

    MAIN_HOME.classList.remove('d-none');
    MAIN_HOME.classList.remove('z-n1');
    MAIN_HOME.classList.add('z-0');

}



// This function displays "cart page"

function  showCartPage() {
    
    CART_PAGE.classList.remove('d-none');
    CART_PAGE.classList.remove('z-n1');
    CART_PAGE.classList.add('z-0');

}