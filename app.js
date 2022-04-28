const featuredImage = document.querySelector(".Feauture-img");
const containerImage = document.querySelectorAll(".container-img");
const prevNav = document.querySelector(".preNavigation");
const nextNav = document.querySelector(".nextNavigation");
const cart = document.querySelector(".cart");
const plus = document.querySelector(".add");
const minus = document.querySelector(".minus");
const quantity = document.querySelector(".quantityNumber");
const itemQuantity = document.querySelector(".quantityNumb");
const finalPrice = document.querySelector(".final-price");
const addToCart = document.querySelector(".add-to-cart");
const cancel = document.querySelector(".delete-icon");
const cartFull = document.querySelector(".cart-full");
let count = 0;
let cartCounter= 0;
const imgArr = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];



// eventlistener on the row of small images under the featured image so when user clicks any of them the featured image gets populated with the src
containerImage.forEach((img) => img.addEventListener("click", function(){
  featuredImage.src = img.src;
}));

// eventlistener to increase counter which is used as an index for the imgArray to then retrive the src and populate the featured image

prevNav.addEventListener("click", function(){
  if(count <= 0){
      count = 4;
  }
  count--;
  featuredImage.src = imgArr[count];
})
// eventlistener to decrease counter which is used as an index for the imgArray to then retrive the src and populate the featured image
nextNav.addEventListener("click", function(){
  count++
  if(count >= 4){
    count = 0;
}
featuredImage.src = imgArr[count];
})

nextNav.addEventListener("click", function(){
    count++
    if(count >= 4){
      count = 0;
  }
  featuredImage.src = imgArr[count];
  })

  function cartFunctionality (increase,decrease,cartBtn){
    increase.addEventListener("click", function(){
        cartCounter++
        if(!cartCounter == 0){
            cartFull.classList.add("flex");
        }
        quantity.textContent = cartCounter;
        itemQuantity.textContent = cartCounter
        let final = 125 * cartCounter;
        finalPrice.textContent = `$ ${final}.00`
        
      })

      decrease.addEventListener("click", function(){
          if (cartCounter === 0){
              let cartCounter = 0;
          } else {
            cartCounter--
            if(cartCounter == 0){
                cartFull.classList.remove("flex");
            }
            quantity.textContent = cartCounter;
            itemQuantity.textContent = cartCounter
            let final = 125 * cartCounter;
            finalPrice.textContent = `$ ${final}.00`
          }
      })

      cartBtn.addEventListener("click", function(){
          cart.classList.add("block");
      })
  }

 
      
  

  

  cartFunctionality(plus,minus,addToCart);


  

  




