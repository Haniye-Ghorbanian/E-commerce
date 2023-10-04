
// Showing the categories from api

const FILTER_OPTIONS = document.querySelector('.FILTER_OPTIONS');
const FILTER_BTN = document.querySelector('.FILTER_BTN');

fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then((categoryData) => {
                showCategories(categoryData);
                handleCategories()

            })
            
            .catch(()=>{
                
            })



            

let filterFlag = false;
function showHideFilter() {
    debugger
    if(filterFlag == false) {
        FILTER_OPTIONS.classList.remove('d-none');
        filterFlag = true;
    } else {
        FILTER_OPTIONS.classList.add('d-none');
        filterFlag = false;
    }
    
}




function showCategories(categories) {
    
    const listOfCategories = categories.map(category => {
        return `<div class="OPTIONS_OF_FILTER">
                    <input type="checkbox" name="filter" id="filter-${category}">
                    <label class="options__filter--list--option" for="filter-${category}">${category}</label>
               </div>`
    }) 

    FILTER_OPTIONS.innerHTML = listOfCategories.join('');
}


// working filters
filteredProducts = [];

function findCategories() {
    
    if (this.checked) {
        const category = this.nextElementSibling.textContent;
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => res.json())
            .then((products) => {
                findRelatedProducts(products);
                displayFilteredProducts();
            });
    } else {
        const uncheckedCategory = this.nextElementSibling.textContent;
        deleteUncheckedCategory(uncheckedCategory);
    }
}



function findRelatedProducts(products) {
products.map(product => filteredProducts.push(product));
}


function deleteUncheckedCategory(uncheckedCategory) {
    filteredProducts = filteredProducts.filter(product => product.category !== uncheckedCategory);
    filteredProducts.length !== 0 ? displayRelatedProducts(filteredProducts) : start();
    
}


displayFilteredProducts = function displayRelatedProducts() {
    CARDS_CONTAINER.innerHTML = '';
    columnSizeSm = largeItems ? '6' : mediumItems ? '4' : smallItems ? '3' : '3';
    const filterdTemplate = filteredProducts.map(filteredProduct => {
        return  ` <!-- Single card::start -->

        <div class="myCard d-flex flex-column justify-content-between align-items-center col-sm-${columnSizeSm} col-12 p-3">
    
    
            <!-- Single card => Container of card's image::start -->
            <div class="myCard__imgContainer d-flex justify-content-center align-items-center mb-md-4">
    
    
                <div class="myCard__imgContainer--img">
                    <img src="${filteredProduct.image}">
                </div>
    
    
            </div>
            <!-- Single card => Container of image::end -->
    
    
    
            <!-- Single card => Container of card's info::start -->
            <div class="myCard__detailContainer d-flex flex-column justify-content-md-start justify-content-evenly align-items-center  w-100 p-2">
    
            
                  <h2 class="myCard__detailContainer--title mb-lg-4 mb-md-3 d-flex align-items-center justify-content-center">${filteredProduct.title}</h2> 
    
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
    })

    CARDS_CONTAINER.innerHTML = filterdTemplate.join('');
}



// controller
function handleCategories() {
    const OPTIONS_OF_FILTER =  Array.from(document.querySelectorAll('input[name="filter"]'));
    
    OPTIONS_OF_FILTER.forEach(option => {
        option.addEventListener('change', findCategories)})
}


FILTER_BTN.addEventListener('click', showHideFilter)




