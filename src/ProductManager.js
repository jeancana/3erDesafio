import { promises as fs } from 'fs'

export default class ProductManager {
    
    constructor() {
        this.products = []
        this.path = './productos.txt'
    }

    static id = 0
  

    addProducts = async (title, description, price, thumbnail, code, stock) => {
        
        ProductManager.id++
        
        let newProducts = { id: ProductManager.id, title, description, price, thumbnail, code, stock }
        
        this.products.push(newProducts)

        await fs.writeFile(this.path, JSON.stringify(this.products, null, '\t'))
    }

    
    readProducts = async () => {
        let contenido = await fs.readFile(this.path, 'utf-8')
        return JSON.parse(contenido)
    }

    getProducts = async () => {
        let contenido2 = await this.readProducts()        
        return console.log(contenido2)
    }

    getProductsById = async (id) => {
        let contenido3= await this.readProducts()  
        let repuesta = contenido3.find(product => product.id === id)
        console.log(repuesta)
    }

    upDateProducts = async (title, description, price, thumbnail, code, stock) => {

        ProductManager.id++
        let newProducts = { id: ProductManager.id, title, description, price, thumbnail, code, stock }
        this.products.push(newProducts)
        await fs.writeFile(this.path, JSON.stringify(this.products, null, '\t'))
    }

    deleteProductsById = async (id) => {
        let contenido4 = await this.readProducts()  
        let filterProduct = contenido4.filter((producto) => producto.id != id)
        
        console.log(filterProduct)
        await fs.writeFile(this.path, JSON.stringify(filterProduct, null, '\t'))
    }

}


const productManager = new ProductManager()

// ---------- ORDEN PARA EL USO DE TODO 

//PASO 1: AGREGANDO LOS PRODUCTOS AL ARRAY (usando Metodo - addProducts() )


productManager.addProducts('Manzana Roja', 'es una fruta', 130, 'url:web - colocarla aca', '001', '5000')
productManager.addProducts('Manzana Verde', 'es una fruta', 130, 'url:web - colocarla aca', '001', '5000')
productManager.addProducts('Pera', 'es una fruta', 180, 'url:web - colocarla aca', '002', '3000')
productManager.addProducts('Arandano', 'es una fruta', 20, 'url:web - colocarla aca', '003', '7000')
productManager.addProducts('Piña', 'es una fruta', 300, 'url:web - colocarla aca', '004', '1000')
productManager.addProducts('Fresa', 'es una fruta', 300, 'url:web - colocarla aca', '004', '1000')
productManager.addProducts('Papaya', 'es una fruta', 300, 'url:web - colocarla aca', '004', '1000')
productManager.addProducts('Melon', 'es una fruta', 300, 'url:web - colocarla aca', '004', '1000')
productManager.addProducts('Uva', 'es una fruta', 300, 'url:web - colocarla aca', '004', '1000')
productManager.addProducts('Naranja', 'es una fruta', 300, 'url:web - colocarla aca', '004', '1000')

 //----- Nota: una vez creados los productos los vuelvo a texto para que no entre en conflicto con el getProductsById al buscar un objeto  


/*
//PASO 2: ACTUALIZANDO LOS PRODUCTOS DENTRO DEL  ARRAY (usando Metodo - upDateProducts() )
productManager.upDateProducts('manzana', 'es una fruta', 130, 'url:web - colocarla aca', '001', '5000')
productManager.upDateProducts('manzana', 'es una fruta', 130, 'url:web - colocarla aca', '001', '5000')
productManager.upDateProducts('pera', 'es una fruta', 180, 'url:web - colocarla aca', '002', '3000')
productManager.upDateProducts('modificado1', 'se modifico para probar1', 20, 'url:web - colocarla aca', '003', '7000')
productManager.upDateProducts('modificado2', 'se modifico para probar2', 300, 'url:web - colocarla aca', '004', '1000')
*/

//PASO 3: MOSTRANDO TODOS LOS PRODUCTOS QUE ESTAN DENTRO DEL ARRAY (usando Metodo - getProducts() )
// 3. Devolviendo todos los productos que estan dentro del arreglo
//productManager.getProducts()


//PASO 4: BUSNCAN UN PRODUCTO DENTRO DEL ARRAY POR SU ID (usando Metodo - getProductsById() )
//productManager.getProductsById(4)

//----- NOTA: los vuelvo a texto para que no entre en conflicto getProducts() - PERO SI FUNCIONA


// PASO 5: BUSNCAN UN PRODUCTO DENTRO DEL ARRAY POR SU ID(usando Metodo - getProductsById())
//productManager.deleteProductsById(2)








