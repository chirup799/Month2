const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Mouse", price: 30 },
  { id: 3, name: "Keyboard", price: 60 },
  { id: 4, name: "Monitor", price: 250 }
]
const heading = document.getElementById("heading");
const searchInput = document.getElementById("searchInput");


const productList = document.getElementById("productList");

function renderProducts(productsToDisplay){
productList.innerHTML="";
if(productsToDisplay.length ===0){
    productList.textContent="No Products Found";
    return
}
productsToDisplay.forEach((product)=>{
    const p = document.createElement("p");
    p.textContent = `${product.name} - £${product.price}`;
    productList.appendChild(p);
});
}
renderProducts(products);

searchInput.addEventListener("input",()=>{
const searchText = searchInput.value.toLowerCase()
const filteredProducts = products.filter((product)=>{
    
    return product.name.toLowerCase().includes(searchText);
});
renderProducts(filteredProducts);
});