import ilustration from '../../assets/profile.png'
import { ButtonGrup, Ilustration, MainAbout, Welcomes } from './style'

function About() {
  return (
    <>
      <MainAbout>
        <Welcomes>
          <h1>Bem vindo ao meu portfólio</h1>
          <p>
          Sou Daniel Araujo, um desenvolvedor web full-stack com 
          formação em Web Developer pela Trybe. Minhas habilidades 
          incluem <span>HTML5</span>, <span>CSS3</span>, <span>JavaScript</span>, <span>ReactJS</span>, <span>Node.js</span> e 
          muito mais. Estou pronto para enfrentar desafios e 
          criar soluções eficientes para seus projetos. 
          Explore meu portfólio e descubra como posso ajudar!
          </p>
          <ButtonGrup>
            <a href="https://www.linkedin.com/in/daniel-araujo-dev/" target='_blank'>Linkedin</a>
            <a href="https://github.com/DanielDeJesusAraujo" target='_blank'>Github</a>      
          </ButtonGrup>
        </Welcomes>
        <Ilustration>
          <img src={ilustration} alt="instruction" />
        </Ilustration>
      </MainAbout>
    </>
  )
}

export default About