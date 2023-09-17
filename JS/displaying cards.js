
const CARDS_CONTAINER = document.querySelector('.CARDS_CONTAINER');

function start() {
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data) =>{
                return showData(data)
            })
            .catch(()=>{
               
            })

}

           
function categoryFinder(category) {

    fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then((data) =>{
                storingProducts(data)  
            })
            // .then((storedProducts) => {
            //     findRelatedProducts(storedProducts)
            // })
            .then(() => {
                return showData()
            })
            .catch(()=>{
                
            })
}

let storedProducts  = []


function storingProducts(products) {
    products.map(product => storedProducts.push(product));
}


function showData(storedProducts) {
    const template = storedProducts.map(product => {
    return ` <!-- Single card::start -->

    <div class="myCard d-flex flex-column justify-content-between align-items-center col-sm-4 col-12 pb-3 pt-3 ps-2 pe-2 mb-5 ">


        <!-- Single card => Container of card's image::start -->
        <div class="myCard__imgContainer d-flex justify-content-center align-items-center mb-md-4">


            
                <img src="${product.image}">
         


        </div>
        <!-- Single card => Container of image::end -->



        <!-- Single card => Container of card's info::start -->
        <div class="myCard__detailContainer d-flex flex-column justify-content-md-between justify-content-evenly align-items-center  w-100 ">

        
              <h2 class="myCard__detailContainer--title mb-2">${product.title}</h2> 

              <h3 class="myCard__detailContainer--category">${product.category}</h3>


            <div class="myCard__detailContainer--info d-flex justify-content-between align-items-center ">
                <div class="myCard__detailContainer--info--price">Price: ${product.price}</div>
                <div class="myCard__detailContainer--info--rate">Rate: ${product.rating.rate}</div>
            </div> 

            <button class="myCard__detailContainer--btn">Quick Add</button> 


        </div>
        <!-- Single card => Container of card's info::end -->



    </div>

    <!-- Single card::end -->\n`
})
   


    CARDS_CONTAINER.innerHTML = template.join('')
  
}


document.addEventListener('load', start())






