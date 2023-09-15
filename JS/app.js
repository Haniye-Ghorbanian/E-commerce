
const cantainer = document.querySelector('.CARDS_CONTAINER');


fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data) =>{
                return showData(data)
            })
            .catch(()=>{
                cantainer.innerHTML="error";
            })


            

function categoryFinder(category) {

    fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then((data) =>{
                return showData(data)
            })
            .catch(()=>{
                cantainer.innerHTML="error";
            })
}


function showData(products) {
    const template = products.map(product => {
    return ` <!-- Single card::start -->

    <div class="myCard d-flex flex-column justify-content-between align-items-center col-sm-6 col-12 p-3">


        <!-- Single card => Container of card's image::start -->
        <div class="myCard__imgContainer d-flex justify-content-center align-items-center h-25 mb-md-4">


            <div class="myCard__imgContainer--img">
                <img src="${product.image}">
            </div>


        </div>
        <!-- Single card => Container of image::end -->



        <!-- Single card => Container of card's info::start -->
        <div class="myCard__detailContainer d-flex flex-column justify-content-md-start justify-content-evenly align-items-center  w-100 p-2 h-75">

        
              <h2 class="myCard__detailContainer--title mb-lg-4 mb-md-3">${product.title}</h2> 

              <h3 class="myCard__detailContainer--category">${product.category}</h3>


            <div class="myCard__detailContainer--info d-flex justify-content-between align-items-center mb-lg-4 mb-md-3">
                <div class="myCard__detailContainer--info--price">Price: ${product.price}</div>
                <div class="myCard__detailContainer--info--rate">Rate: ${product.rating.rate}</div>
            </div> 

            <button class="myCard__detailContainer--btn">Quick Add</button> 


        </div>
        <!-- Single card => Container of card's info::end -->



    </div>

    <!-- Single card::end -->`
})
   


    cantainer.innerHTML = template.join('')
}




