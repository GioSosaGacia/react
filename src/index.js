// debemos de imporar la biblioteca de react, sirve para crear interfaces de usuario, permite crear app moviles o de escritorio
// Tambien debemos de importar DOM
import React from "react";
import ReactDOM from "react-dom/client";
// exportacion nombrada, exporta multiples cosas como funciones, variables p componetes y van entre llaves para hacer el destructuring
import { Greeting, UserCard } from "./greeting";
// Importacion por defecto cuando solo se quire exporar un unico elemento
import Product, { Navegador } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from './Post';

// No necesito crear una variable
// const rootElement = ReactDOM.createRoot(document.getElementById('root'))
// Otra opcion de hacerlo
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<h1>Hola mundo, Desde el componente de react  </h1>);


//La creamos en el archivo greeting para exportarla aqui
// function Greeting() {
//   function add(x,y){
//     return x + y
//   }
//   return <h1>{add(10,48)}</h1>
// }


// 1.fORMA DE MANEJAR UN EVENTO
const handleChange = (e) => {
  console.log(e.target.value)
}



const users = [
  {
    id: 1,
    name: 'Maria Sosa',
    imagen: 'https://robohash.org/user1'
  }, {
    id: 2,
    name: 'Luis Sosa',
    imagen: 'https://robohash.org/user2'
  }, {
    id: 3,
    name: 'Giovanni Sosa',
    imagen: 'https://robohash.org/user3'
  }
]


root.render(
  // Para utilizar mas de 1 vez la funtion Greeting lo debemos de integrar dentro de una etiqueta HTMl
  <>
    {/* <Greeting title="Hola Giovanni" car="Kia" />
    <Greeting title="Hola Angelica" car="Fiat" />
    <Greeting title="Hola Raquel" car="Cruze" />
    <Greeting title="Hola Maria" /> */}

    <TaskCard ready={true} />
    <Saludar />
    <input id='hola' onChange={handleChange} />
    <Posts />

    <UserCard
      name="Luis David"
      amount={3000}
      married={true}
      points={[99, 33, 66, 76]}
      addres={{ street: "Teodomiro Manzano 3692", city: "Guadalaja" }}
      greet={function () { alert('Hello') }}
    />

    <UserCard
      name="Lu"
      amount={4000}
      married={false}
      points={[99, 33, 66, 76]}
      addres={{ street: "Av. 8 de julio 3692", city: "Guadalaja" }}
      greet={function () { alert('Hello') }}
    />


    <Button text='Click me ' name='Jow' />
    <Button text='Pay' name='Market' />
    <Button text='Hi' />


    <Product />
    <Navegador />


{/* Al tecorrer una lista con map debemos de agregar el indice que es el segundo par dentro de la función flecha, si no esta marcrá error, nota la key la debe de tener el primer elemento */}
    {users.map((user, index) => {
      return <div key={index}>
        <h1>{user.name}</h1>
        <img src={user.imagen}/>
      </div>
    })}

  </>
);

