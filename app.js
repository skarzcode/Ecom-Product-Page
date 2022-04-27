const featuredImage = document.querySelector(".Feauture-img");
const containerImage = document.querySelectorAll(".container-img");
const prevNav = document.querySelector(".preNavigation");
const nextNav = document.querySelector(".nextNavigation");
let count = 0;
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
  console.log(count)
  if(count >= 4){
    count = 0;
}
featuredImage.src = imgArr[count];
})





