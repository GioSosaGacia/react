// Las funciones o componentes van declardos en mayuscula al inicio si no es asi react no lo recocerá como componente 

//IS Modules permite importar y exportar archivos 

export function Greeting({ title, car = 'No tengo' }) {
    console.log(title, car)
    return <h1>{title} dice {title}</h1>
}

// Destructuring omite el props- pasando los parametros dentro de {}
// export function UserCard(props) {
export function UserCard({name, amount, married, addres, greet}) {
    console.log({name, amount, married, addres,greet})
    return <div>
        <h2>{name}</h2>
        <p>${amount}</p>
        <p>{married ? 'Married' : 'Single'}</p>
        <ul>
            <li>City: {addres.city}</li>
            <li>Adress: {addres.street}</li>
        </ul>
    </div>
}