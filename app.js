const featuredImage = document.querySelector(".Feauture-img");
const containerImage = document.querySelectorAll(".container-img");
const prevNav = document.querySelector(".preNavigation");
const nextNav = document.querySelector(".nextNavigation");
const cartIcon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");
const plus = document.querySelector(".add");
const minus = document.querySelector(".minus");
const quantity = document.querySelector(".quantityNumber");
const itemQuantity = document.querySelector(".quantityNumb");
const finalPrice = document.querySelector(".final-price");
const bin = document.querySelector(".delete-icon");
const addToCart = document.querySelector(".add-to-cart");
const cancel = document.querySelector(".delete-icon");
const cartFull = document.querySelector(".cart-full");
const cartCount = document.querySelector(".cart-number-count");
let count = 0;
let cartCounter= 0;
let totalCount = 0;
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



  function cartFunctionality (increase,decrease,cartBtn,binIcon){
    //   Increases the quantity of items
    increase.addEventListener("click", function(){
        cartCounter++
        quantity.textContent = cartCounter;        
      })
      //   descreases the quantity of items

      decrease.addEventListener("click", function(){
          if (cartCounter === 0){
              let cartCounter = 0;
          } else {
            cartCounter--
            if(cartCounter == 0){
                cartFull.classList.remove("flex");
            }
            quantity.textContent = cartCounter;
          }
      })


      binIcon.addEventListener("click", function(){
        if (totalCount > 0){
          totalCount = 0;
            itemQuantity.textContent = cartCounter;
            quantity.textContent = cartCounter;
            cartFull.classList.remove("flex");
                cartCount.classList.remove("flex");
                localStorage.setItem('cartNum', 0);
        }
        cartCounter = 0;
            totalCount = 0;
      })

// Displays the cart when user clicks add to cart
// Increments the total count which is displayed in the cart and reinitializes the quantity count to 0
      cartBtn.addEventListener("click", function(){
          cart.classList.add("block");
          totalCount = totalCount + cartCounter;
          itemQuantity.textContent = totalCount;
            let final = 125 * totalCount;
            finalPrice.textContent = `$ ${final}.00`
            cartCounter = 0;
            quantity.textContent = cartCounter;
            cartFull.classList.add("flex");
            if (totalCount > 0){
                cartCount.classList.add("flex");
            }
            localStorage.setItem('cartNum', totalCount);
           
      })

  }
// displays or hides the cart when user clicks on the basket in the header
  cartIcon.addEventListener("click", function(){
      cart.classList.toggle("block");
  })

  const currentCount = localStorage.getItem('cartNum');

if(currentCount > 0){
  totalCount = Number(currentCount);
  itemQuantity.textContent = totalCount;
    let final = 125 * currentCount;
    finalPrice.textContent = `$ ${final}.00`
    cartFull.classList.add("flex");
    cartCount.classList.add("flex");
} else if(currentCount == 0){
    cartCount.classList.remove("flex");
}


 





  
 
      

  cartFunctionality(plus,minus,addToCart,bin);


  

  




