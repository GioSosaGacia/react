// debemos de imporar la biblioteca de react, sirve para crear interfaces de usuario, permite crear app moviles o de escritorio
// Tambien debemos de importar DOM
import React from "react";
import ReactDOM from "react-dom/client";

// Mo necesito crear una variable
// const rootElement = ReactDOM.createRoot(document.getElementById('root'))

// Otra opcion de hacerlo
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hola mundo </h1>);

function Greeting() {
  return <h1>Este es un H1</h1>;
}

root.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>
);
