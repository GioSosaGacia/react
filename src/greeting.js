// Las funciones o componentes van declardos en mayuscula al inicio si no es asi react no lo recocerá como componente 

//IS Modules permite importar y exportar archivos 

export function Greeting() {
    function add(x, y) {
        return x + y
    }
    return <h1>{add(10, 48)}</h1>
}


export function UserCard(){
    return <h1>Use Card</h1>
}