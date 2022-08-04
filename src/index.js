//Variables for DOM manipulation
const emailMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const cartMenuIcon = document.querySelector(".navbar-shopping-cart");

const productDetailCloseIcon = document.querySelector(".product-detail-close");

const shoppingCartContainer = document.querySelector("#shopping-cart-container");

const productDetailContainer = document.querySelector("#product-detail");

const cardsContainer = document.querySelector(".cards-container");

//Functions for create dinamic menus
emailMenu.addEventListener("click", () => {
    const isAsideOpen = shoppingCartContainer.classList.contains("slide-left");
    const isProductDetailOpen = productDetailContainer.classList.contains("slide-left");

    if (isAsideOpen) {
        shoppingCartContainer.classList.remove("slide-left");
    }

    if (isProductDetailOpen) {
        productDetailContainer.classList.remove("slide-left");
    }

    desktopMenu.classList.toggle("inactive");
});

burguerMenu.addEventListener("click", () => {
    const isAsideOpen = shoppingCartContainer.classList.contains("slide-left");
    const isProductDetailOpen = productDetailContainer.classList.contains("slide-left");

    if (isAsideOpen) {
        shoppingCartContainer.classList.remove("slide-left");
    }

    if (isProductDetailOpen) {
        productDetailContainer.classList.remove("slide-left");
    }

    mobileMenu.classList.toggle("slide-rigth");
});

cartMenuIcon.addEventListener("click", () => {
    const isMobileMenuOpen = mobileMenu.classList.contains("slide-rigth");
    const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");
    const isProductDetailOpen = productDetailContainer.classList.contains("slide-left");


    if (isMobileMenuOpen) {
        mobileMenu.classList.remove("slide-rigth");
    }

    if (isDesktopMenuOpen) {
        desktopMenu.classList.add("inactive");
    }

    if (isProductDetailOpen) {
        productDetailContainer.classList.remove("slide-left");
    }

    shoppingCartContainer.classList.toggle("slide-left");
});

productDetailCloseIcon.addEventListener("click", () => {
    productDetailContainer.classList.remove("slide-left");
});

//Array with products
const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Screen",
    price: 220,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg"
});
productList.push({
    name: "Laptop",
    price: 620,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

//We have to recreate the following HTML element from Javascript
/* 
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./assets/icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
 */
//Creating HTML elements from arrays
function renderProducts(arr) {
    for (product of arr) {
        //Create product-card div
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        //Create productImg
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        //Event listener and function to open product details aside
        productImg.addEventListener("click", () => {
            shoppingCartContainer.classList.remove("slide-left");
            productDetailContainer.classList.add("slide-left");
            desktopMenu.classList.add("inactive");
        });
        //Create product-info div
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        //Create a div for name and price
        const productInfoDiv = document.createElement("div");
        //Create a p for name and price
        const productPrice = document.createElement("p");
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement("p");
        productName.innerText = product.name;
        //Adding price and name to productInfoDiv
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        //Create figure and img for "add to cart" button
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./assets/icons/bt_add_to_cart.svg");
        productInfoFigure.appendChild(productImgCart);
        //Adding productInfoDiv and productInfoFigure to productInfo
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        //Adding productImg and productInfo to productCard
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        //Adding productCard to cardsContainer
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

