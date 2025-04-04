import './task.css'

export function TaskCard({ ready }) {

    // 1.Los stilos se pasan como un objeto dentro de una var o desde un archivo .css
    // const cardStyles = {
    //     background: 'black', color: '#fff', padding: '20px', margin: '20px'
    // }

    // 1.return <div style={cardStyles}>
    return (
        < div className='card' >
            <h1>My first Task</h1>
            <span className={ready ? 'bg-green' : 'bg-red'}>
                {ready ? 'Tarea realizada' : 'Tarea pendiente'}
            </span>
        </div >
    );
}