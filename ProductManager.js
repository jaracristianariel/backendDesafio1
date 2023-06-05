// definir la clase productmanager
class ProductManager {
    constructor() {
        this.products = [];
    }

    //metodo que retorna el array de productos
    getProducts = () => {
        return this.products;
    }
    //cargar productos al array
    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            products: []
        }
        if (this.products.length === 0){
            product.id = 1
        } else {
            product.id = this.products[this.products.length -1].id+1
        }
        // subir producto
        this.products.push(product)
    }

    getProductById = (idProduct) => {
        const productIndex = this.products.findIndex(product => product.id === idProduct);
        if (productIndex === -1) {
            console,log('Not found');
            return;
        }
        const productAdd = this.products [productIndex].products.includes(idProduct);
        if (productAdd) {
            console.log('el producto se agrego correctamente');
            return;
        }
        this.products[productIndex].products.push(idProduct)
    }
};

const agregProd = new ProductManager();
agregProd.addProduct('Anillo', 'Oro', 2000, 'sin imagen', 'a001', 5);
agregProd.addProduct('Anillo', 'Plata', 1000, 'sin imagen', 'a002', 5);
agregProd.addProduct('Anillo', 'Acero', 500, 'sin imagen', 'a003', 5);

agregProd.getProductById(1);
agregProd.getProductById(2);
agregProd.getProductById(3);

console.log(agregProd.getProducts());