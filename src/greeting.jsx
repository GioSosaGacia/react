// Las funciones o componentes van declardos en mayuscula al inicio si no es asi react no lo recocerá como componente 

//IS Modules permite importar y exportar archivos 

export function Greeting({title, car ='No tengo'}) {
    console.log(title,car)
    return <h1>{title} dice {title}</h1>
    }

export function UserCard(props){
    console.log(props)
    return <h1>Use Card</h1>
}