class Shopping{
    handleClear(){
        ROOT_SHOPPING.innerHTML = '';
    }
    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;
        CATALOG.forEach(({id , name, price}) =>{
                if(productsStore.indexOf(id) !== -1){
                   htmlCatalog += `
                        <tr>
                        <td class="shopping_name">${name}</td>
                        <td class="shopping_price">${price.toLocaleString()} Tenge</td>
                        </tr>
                                `;
                    sumCatalog += price;
                   }
        });

        const html = `
                <div class="shopping_container">
                    <div class="shopping_close" onclick="ShoppingPage.handleClear();"></div>
                    <table>
                        ${htmlCatalog}
                        <tr>
                        <td class="shopping_name">Total:</td>
                        <td class="shopping_price">${sumCatalog.toLocaleString()} Tenge</td>
                        </tr>
                    </table>
                </div>

                    `;
        ROOT_SHOPPING.innerHTML = html;
    }
}
const ShoppingPage = new Shopping();

