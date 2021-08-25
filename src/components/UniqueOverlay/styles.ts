import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LogoSVG, BurgerSVG } from "./iconSVG"

export const Container = styled.div`
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;


export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.5rem;
    min-height: 52px;
`
export const Logo = styled(LogoSVG)`
    height: 17px;
    cursor: pointer;
`
export const Burger = styled(BurgerSVG)`
    width: 24px;
    height: 24px;
    padding-right: 5px;
    cursor: pointer;
`
export const Footer  = styled(motion.footer)`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;

    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        li{
            list-style: none;
            font-size: 14px;

            & + li{
                margin: 10px 0 0;
            }

            a{
                text-decoration: none;
                color: #fff;
                transition: .1s ease-in;

                &:hover{
                    color: #ABA2A1;
                }
            }
        }
    }

    margin-bottom: 30px;

    @media(min-width: 600px){
        margin-bottom: 38px;

        ul{
            flex-direction: row;

            li + li{
                margin: 0 0 0 30px;
            }
        }
    }

`
