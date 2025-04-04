// Permite agregar iconos, agregamos uno en el boton
import {VscBug} from 'react-icons/vsc'


// Another way to create a component
export const Posts = () =>{
    return <button onClick={ () => {
        // alert('Obteniedo datos')
        // fetch Permite traer datos, es mejor hacerlo con async way and callback
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=> response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
        
    }}>
        <VscBug/>
        Traer datos
    </button>
}