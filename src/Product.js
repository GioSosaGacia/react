function Product(){
    return <div>
        <h1>Producto</h1>
    </div>
}

// tambien podemos importar de manera nombrada, mediante el uso de las llaves{}
export function Navegador(){
    return <nav>
        Naviation
    </nav>
}

// Importa todo el archivo o algo en especifico, no solo la fucntion, colocando el componente sin {}
export default Product