import express from 'express' //importando la libreria express
import ProductManager from './ProductManager.js'

// Ejecutando la Libreria Express
const app = express()
app.use(express.urlencoded({ extended : true }))

const productManager = new ProductManager()
const readProducts = productManager.readProducts()


//--------   CHEQUEANDO RUTA RAIZ ------------------------ http://localhost:8080/
app.get('/', async (request, response) => {
    console.log('Servidor funciona desde la ruta Raiz')
    response.send('Hola desde el servidor - Ruta Raiz ')
})


app.listen(8080, () => console.log('Server Up'))



//--------   TAREA NRO 1: LEYENDO TODOS LOS PRODUCTOS  -------------------  http://localhost:8080/products 
//--------   TAREA NRO 2: LEYENDO solo los productos con ID del 1 al 5 ---  http://localhost:8080/products?limit=5  
app.get('/products', async (request, response) => {

    // obteniendo de dato "limite=5" por Query - Params (el ejercicio me pide que debo mostrar los 5 primeros productos)
    const limit = parseInt(request.query.limit)

    // Tomando todos los productos volviendo una repuesta asincrona  y estableciendo el rango de 0 a 5 con HOF "slice."
    const allProducts = await readProducts
    const productLimit = allProducts.slice(0, limit)
    
    // Enviando las repuesta requeridas en el ejercicio 
    if (!limit) return response.send(await readProducts)
    response.send(productLimit)
})
 
//--------   TAREA NRO 3: LEYENDO solo el productos con el ID 2 ------------  http://localhost:8080/products/2  
//--------   TAREA NRO 4: Si pido Un Id que no Exista me debe dar Error  ---  http://localhost:8080/products/222222222  

app.get('/products/:id', async (request, response) => {

     // obteniendo de dato "id=2" por URL - Params (el ejercicio me pide que debo mostrar el producto con el id=2)
    const id = request.params.id
    
    // Tomando todos los productos volviendo una repuesta asincrona  y buscan el id=2 con HOF "find."
    const allProducts2 = await readProducts
    const producto = allProducts2.find(item => item.id == id)
    
    // Enviando las repuesta requeridas en el ejercicio 
    if (!producto) return response.send({ error: 'El curso NO existe' })
    response.send(producto)

})


