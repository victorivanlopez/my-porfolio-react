import { ButtonPrimary, Hero, HeroContent } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export const HeroSection = () => {
  return (
    <Hero id='home' className='observer'>
      <HeroContent>
        <p>Hola. Mi nombre es Víctor Iván López</p>
        <h1>Desarrollador Web <span>Front-end</span></h1>

        <ButtonPrimary href="#projects">Ver Proyectos</ButtonPrimary>
      </HeroContent>

      <a href='#about'>
        <FontAwesomeIcon icon={faArrowDown} bounce />
      </a>
    </Hero>
  )
}