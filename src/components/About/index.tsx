import React from 'react'
import ilustration from '../../assets/ilustration.svg'
import { Ilustration, MainAbout, Welcomes } from './style'

function About() {
  return (
    <MainAbout>
      <Welcomes>
        <p><strong>Meu nome é</strong> <span>Daniel Araujo</span>
          Olá! Sou Daniel Araujo, um desenvolvedor web full-stack com formação em Web Developer pela Trybe. Minhas habilidades incluem HTML5, CSS3, JavaScript, ReactJS, Node.js e muito mais. Estou pronto para enfrentar desafios e criar soluções eficientes para seus projetos. Explore meu portfólio e descubra como posso ajudar!
        </p>
      </Welcomes>
      <Ilustration>
        <img src={ilustration} alt="instruction" />
      </Ilustration>
    </MainAbout>
  )
}

export default About