// debemos de imporar la biblioteca de react, sirve para crear interfaces de usuario, permite crear app moviles o de escritorio
// Tambien debemos de importar DOM
import React from "react";
import ReactDOM from "react-dom/client";
// exportacion nombrada, exporta multiples cosas como funciones, variables p componetes y van entre llaves para hacer el destructuring
import { Greeting, UserCard } from "./greeting";
// Importacion por defecto cuando solo se quire exporar un unico elemento
import Product, { Navegador } from "./Product";

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

root.render(
  // Para utilizar mas de 1 vez la funtion Greeting lo debemos de integrar dentro de una etiqueta HTMl
  <>
    <Greeting title="Hola Giovanni" car="Kia" />
    <Greeting title="Hola Angelica" car="Fiat" />

    <UserCard
      name="Luis David"
      amout={3000}
      married={true}
      points={[99, 33, 66, 76]}
      addres={{ street: "Teodomiro Manzano 3692", city: "Guadalaja" }}
    />

    <Product />
    <Navegador />
    <Greeting title="Hola Raquel" car="Cruze" />
    <Greeting title="Hola Maria" />
  </>
);
