import './imagem-style.css'

function Imagem(props) {
  return(
    <img 
      className="image"
      src={props.link} 
      alt={props.description}
    />
  )
}

export default Imagem