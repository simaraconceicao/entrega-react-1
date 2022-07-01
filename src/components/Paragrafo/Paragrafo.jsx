import './paragrafo-style.css'

function Paragrafo(props) {
  return(
    <p className='texto'>{props.children}</p>
  )
}

export default Paragrafo