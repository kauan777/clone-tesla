import {useTransform } from 'framer-motion';
import  React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';


const UniqueOverlay: React.FC = () =>{

  const {scrollYProgress} = useWrapperScroll()
  const opacity = useTransform(scrollYProgress, [0.9, 1], [0,1])
  const y = useTransform(scrollYProgress, [0.9, 1], [-15,0])

  return (
    <Container>
     <Header>
       <Logo/>
       <Burger/>
     </Header>
    <Footer style={{opacity, y}}>
      <ul>
        <li>
          <a href="#">UI Clone</a>
        </li>
        <li>
          <a href="#">made with</a>
        </li> 
        <li>
          <a href="#">Guilherme Rodz</a>
        </li>
      </ul>
    </Footer>
    </Container>
  );
};

export default UniqueOverlay;
