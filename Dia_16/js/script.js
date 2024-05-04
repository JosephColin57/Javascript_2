let createProductBtn = document.getElementById("create-product")

let products = [];

createProductBtn.addEventListener("click", (event) => {
  event.preventDefault();
  
  let fields = document.querySelectorAll("#product-form input");
  let productObject = {};
  fields.forEach(field => {
    productObject[field.name] = field.value;
  });

  products = [... products, productObject];

  printProductList(products, "product-list");

});

let createProductCard = (product) => {
  let card = document.createElement("div");
  card.classList.add("card", "mb-3");

  let img = document.createElement("img");
  img.src = product.Img;
  img.classList.add("card-img-top");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = product.Product;

  let text = document.createElement("p");
  text.classList.add("card-text");
  text.textContent = product.Description;

  let price = document.createElement("span");
  price.classList.add("card-text");
  price.textContent = product.Price;

  cardBody.appendChild(title);
  cardBody.appendChild(text);
  cardBody.appendChild(price);

  card.appendChild(img);
  card.appendChild(cardBody);

  return card;
}

let printProductList = (dataArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);

  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }
  dataArray.forEach(product => wrapper.appendChild(createProductCard(product)));
}


let filterByCategory = () => {
    let category = document.getElementById('category-filter').value.toLowerCase();
    let filteredProducts = products.filter(product => product.Category.toLowerCase() === category);
    printProductList(filteredProducts, "product-list");
  };
  
  let resetFilter = () => {
    printProductList(products, "product-list"); // Muestra todos los productos
    document.getElementById('category-filter').value = ''; // Opcional: limpia el campo de filtro
};
