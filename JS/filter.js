
// Showing the categories from api

const FILTER_OPTIONS = document.querySelector('.FILTER_OPTIONS');

fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then((categoryData) => {
                showCategories(categoryData);
                handleCategories()

            })
            
            .catch(()=>{
                
            })




function showCategories(categories) {
    const listOfCategories = categories.map(category => {
        return `<div class="OPTIONS_OF_FILTER">
                    <label class="options__filter--list--option" for="filter">${category}</label>
                    <input type="checkbox" name="filter" id="filter">
               </div>`
    }) 

    FILTER_OPTIONS.innerHTML = listOfCategories.join('');
}




// working filters
let filteredProducts = [];

function findCategories() {
    if (this.checked) {
        const category = this.previousElementSibling.textContent;
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then((products) => {
                
                
                findRelatedProducts(products);
                displayRelatedProducts();
               
            })
    } else {
        console.log('unchecked')
    }
}


function findRelatedProducts(products) {
products.map(product => filteredProducts.push(product));
   
}


function displayRelatedProducts() {
    CARDS_CONTAINER.innerHTML = '';
    const filterdTemplate = filteredProducts.map(filteredProduct => {
        return  ` <!-- Single card::start -->

        <div class="myCard d-flex flex-column justify-content-between align-items-center col-sm-6 col-12 p-3">
    
    
            <!-- Single card => Container of card's image::start -->
            <div class="myCard__imgContainer d-flex justify-content-center align-items-center h-25 mb-md-4">
    
    
                <div class="myCard__imgContainer--img">
                    <img src="${filteredProduct.image}">
                </div>
    
    
            </div>
            <!-- Single card => Container of image::end -->
    
    
    
            <!-- Single card => Container of card's info::start -->
            <div class="myCard__detailContainer d-flex flex-column justify-content-md-start justify-content-evenly align-items-center  w-100 p-2 h-75">
    
            
                  <h2 class="myCard__detailContainer--title mb-lg-4 mb-md-3">${filteredProduct.title}</h2> 
    
                  <h3 class="myCard__detailContainer--category">${filteredProduct.category}</h3>
    
    
                <div class="myCard__detailContainer--info d-flex justify-content-between align-items-center mb-lg-4 mb-md-3">
                    <div class="myCard__detailContainer--info--price">Price: ${filteredProduct.price}</div>
                    <div class="myCard__detailContainer--info--rate">Rate: ${filteredProduct.rating.rate}</div>
                </div> 
    
                <button class="myCard__detailContainer--btn">Quick Add</button> 
    
    
            </div>
            <!-- Single card => Container of card's info::end -->
    
    
    
        </div>
    
        <!-- Single card::end -->\n`
    } )

    CARDS_CONTAINER.innerHTML = filterdTemplate.join('');
}






















// controller
function handleCategories() {
    const OPTIONS_OF_FILTER =  Array.from(document.querySelectorAll('input[name="filter"]'));
    
    OPTIONS_OF_FILTER.map(option => {
        option.addEventListener('change', findCategories)})
}




