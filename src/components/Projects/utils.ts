import IProjects from "../../interfaces/IProjects"
import triviaImage from '../../assets/projectsImages/trivia.png';
import solarImage from '../../assets/projectsImages/solar_sistem.png';
import wallet from '../../assets/projectsImages/wallet.png';

const myProjects: IProjects[] = [
  {
    id: 1,
    title: 'Wallet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: wallet,
    pageUrl: 'https://danieldejesusaraujo.github.io/Trywallet/',
    codeUrl: 'https://github.com/DanielDeJesusAraujo/Trywallet'
  },
  {
    id: 2,
    title: 'Solar system',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: solarImage,
    pageUrl: 'https://danieldejesusaraujo.github.io/Solar-system/',
    codeUrl: 'https://github.com/DanielDeJesusAraujo/Solar-system'
  },
  {
    id: 3,
    title: 'Trivia game',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: triviaImage,
    pageUrl: 'https://danieldejesusaraujo.github.io/game-trivia/',
    codeUrl: 'https://github.com/DanielDeJesusAraujo/game-trivia'
  },
]

export {
  myProjects,
}