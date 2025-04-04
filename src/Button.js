import PropTypes from "prop-types"

// export function Button({text, name = 'Jow'})
export function Button({ text, name }) {
    console.log(text)
    return <div style={{ display:"flex",  justifyContent: 'center', alignItems: 'center',padding:'5px'}}>
        <button>
            {text} - {name}
        </button>
    </div>
}

// Permite definir un tipo de texto 
Button.propTypes = {
    text: PropTypes.string.isRequired
}

// defaultProps Podemos definir un valor por default de esta manera o desde la funcion
Button.defaultProps = {
    name: 'Some User'
}