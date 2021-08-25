import styled from 'styled-components';
import img1 from './assets/car1.png'
import img2 from './assets/car2.png'
import img3 from './assets/car3.png'
import img4 from './assets/car4.png'
import img5 from './assets/car5.png'
import img6 from './assets/car6.png'
import img7 from './assets/car7.png'
export const Container = styled.div`


.colored{
    position: relative;
    height: 100vh;
    width: auto;
    /* adicionando imagem de fundo */
    background-size: cover;
    z-index: -1;
    }
}

.colored:nth-child(1) {
    background-image: url("https://hips.hearstapps.com/autoweek/assets/jag_f-type_r_21my_velocity_blue_reveal_switzerland_02.12.19_03.jpg");
}
.colored:nth-child(2) {
    background-image: url("https://i.pinimg.com/originals/44/13/db/4413db979f336606a3a90926669a6c6e.jpg");
}
.colored:nth-child(3) {
    background-image: url("https://wallpaperaccess.com/full/2093414.jpg");
}
.colored:nth-child(4) {
    background-image: url('https://i.pinimg.com/originals/8a/bf/42/8abf42c89a4869065819f5a61924c008.jpg');
}
.colored:nth-child(5) {
background-image: url("https://www.topgear.com/sites/default/files/images/cars-road-test/2020/03/119b51d1851587bf4959a5bdfd391ac5/new_jaguar_f-type_r_coupe_awd_sorrento_yellow-21.jpg");
}
.colored:nth-child(6) {
background-image: url("https://www.supercars.net/blog/wp-content/uploads/2020/07/2017-Bugatti-Chiron-014-1600.jpg");
}
.colored:nth-child(7) {
background-image: url("https://wallpaperaccess.com/full/1354355.jpg");
}

@media(max-width: 425px){
    
    .colored{
        height: 100vh;
        width: 100%;
    }

    .colored:nth-child(1) {
        background-image: url(${img1})

    }

    .colored:nth-child(2) {
        background-image: url(${img2})

    }

    .colored:nth-child(3) {
        background-image: url(${img3})

    }

    .colored:nth-child(4) {
        background-image: url(${img4})

    }

    .colored:nth-child(5) {
        background-image: url(${img5})

    }

    .colored:nth-child(6) {
        background-image: url(${img6})

    }

    .colored:nth-child(7) {
        background-image: url(${img7})

    }

`;

export const Spacer = styled.div`
height: 10vh;
`
