// debemos de imporar la biblioteca de react, sirve para crear interfaces de usuario, permite crear app moviles o de escritorio
// Tambien debemos de importar DOM
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
// exportacion nombrada, exporta multiples cosas como funciones, variables p componetes y van entre llaves para hacer el destructuring
import { Greeting, UserCard } from "./greeting";
// Importacion por defecto cuando solo se quire exporar un unico elemento
import Product, { Navegador } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Post";

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
  console.log(e.target.value);
};

const users = [
  {
    id: 1,
    name: "Maria Sosa",
    imagen: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Luis Sosa",
    imagen: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Giovanni Sosa",
    imagen: "https://robohash.org/user3",
  },
  {
    id: 4,
    name: "Angelica Aneliz",
    imagen: "https://robohash.org/user4",
  },
];

// Para modificar un estado se debe de usar un hook useState, se debe de importar, permite cambiar el estado de una variable o un parametro
function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reiniciar
      </button>
    </div>
  );
}

function Counter1() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("render de page");
    // los [] hace que solo se ejecute una sola vez el useEffect
  }, [counter]);

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert("El menasaje es: " + mensaje);
        }}
      >
        Save
      </button>
      <hr />

      <h1>Counter: {counter}</h1>
      <button onClick={ () => setCounter(counter + 1)}>
        Incrementar
      </button>

    </div>
  );
}

root.render(
  // Para utilizar mas de 1 vez la funtion Greeting lo debemos de integrar dentro de una etiqueta HTMl
  <>
    {/* <Greeting title="Hola Giovanni" car="Kia" />
    <Greeting title="Hola Angelica" car="Fiat" />
    <Greeting title="Hola Raquel" car="Cruze" />
    <Greeting title="Hola Maria" /> */}

    <TaskCard ready={true} />
    <hr />

    <Saludar />
    <input id="hola" onChange={handleChange} />
    <Posts />

    <hr />

    <UserCard
      name="Luis David"
      amount={3000}
      married={true}
      points={[99, 33, 66, 76]}
      addres={{ street: "Teodomiro Manzano 3692", city: "Guadalaja" }}
      greet={function () {
        alert("Hello");
      }}
    />

    <UserCard
      name="Lu"
      amount={4000}
      married={false}
      points={[99, 33, 66, 76]}
      addres={{ street: "Av. 8 de julio 3692", city: "Guadalaja" }}
      greet={function () {
        alert("Hello");
      }}
    />

    <hr />
    <Button text="Click me " name="Jow" />
    <Button text="Pay" name="Market" />
    <Button text="Hi" />

    <Product />
    <Navegador />
    <hr/>

    {/* Al tecorrer una lista con map debemos de agregar el indice que es el segundo par dentro de la función flecha, si no esta marcrá error, nota la key la debe de tener el primer elemento */}
    {users.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.imagen} />
        </div>
      );
    })}

    <hr />
    <Counter />
    <Counter1 />
  </>
);
