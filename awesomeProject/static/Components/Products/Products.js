
class Products {
    constructor(){
        this.classNameActive = 'products_element_btn_active';
        this.labelAdd = 'Add to basket';
        this.labelRemove = 'Delete from basket';
    }
handleSetLocationStorage(element, id) {
            const { pushProduct, products } = localStorageUtil.putProducts(id);
                if(pushProduct){
                    element.classList.add(this.classNameActive);
                    element.innerHTML = this.labelRemove;
    }
                else {
                    element.classList.remove(this.classNameActive);
                    element.innerHTML = this.labelAdd;
    }
    headerPage.render(products.length);
}
render(){
            const productsStore = localStorageUtil.getProducts();
            let htmlCatalog = '';
            CATALOG.forEach(({id , name, price, img}) =>{
                let activeClass = '';
                let activeText = '';
                if(productsStore.indexOf(id) === -1){
                   activeText = this.labelAdd;
                   }
                else{
                    activeClass = ' '+this.classNameActive;
                    activeText = this.labelRemove;
                }
            htmlCatalog += `
                <li class="products_element">
                    <span class="products_element_name">${name}</span>
                    <img class="products_element_img" src="${img}" />
                    <span class="products_element_price">
                    <img class="icon" src="images/icon.svg">${price.toLocaleString()} Tenge</span>
                    <button class= "products_element_btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">${activeText}</button>
                </li>`;
                });
            const html = `
                <ul class="products_container">
                    ${htmlCatalog}
                </ul>
                    `;
ROOT_PRODUCTS.innerHTML = html;
    }
}
const productsPage = new Products
productsPage.render();







