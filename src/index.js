// debemos de imporar la biblioteca de react, sirve para crear interfaces de usuario, permite crear app moviles o de escritorio
// Tambien debemos de importar DOM
import React from "react";
import ReactDOM from "react-dom/client";
import {Greeting, UserCard} from "./greeting"

// No necesito crear una variable
// const rootElement = ReactDOM.createRoot(document.getElementById('root'))

// Otra opcion de hacerlo
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hola mundo </h1>);

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
  <Greeting/>
  <Greeting/>
  <UserCard/>
  </>

);
