import Titulo from '../components/Titulo/Titulo'
import Imagem from '../components/Imagem/Imagem'
import Paragrafo from '../components/Paragrafo/Paragrafo'

function Conteudo() {
  return(
    <>
      <Titulo text="Olá Reprograma"/>
      <Imagem 
        link="https://www.reprograma.com.br/assets/img/logo-fundoclaro.png" 
        description="logo-reprograma"
      />
      <Paragrafo>Eu sou reprograma</Paragrafo>
      <Titulo text="Olá React"/>
      <Imagem 
        link="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png" 
        description="logo-react"
      />
     <Paragrafo>Eu sou React</Paragrafo>
      <Titulo text="Olá Mundo"/>
      <Imagem 
        link="https://images.unsplash.com/photo-1589519160142-7d1a51b43eaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xvYmV8ZW58MHx8MHx8&w=1000&q=80" 
        description="mundo"
      />
      <Paragrafo>Eu sou mundo</Paragrafo>
    </>

  )
}

export default Conteudo