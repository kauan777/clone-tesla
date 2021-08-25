import styled from 'styled-components';



export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

`;

export const Heading = styled.div`

margin-top: 16.5vh;
text-align: center;
> h1 {
    font-weight: 500;
    font-size: 2.5rem;
    color: #fff;
    text-shadow: 0 0 50px black;
}

> h2{
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #D8D8D8;
    text-shadow: 0 0 30px black;
}
`

export const Buttons = styled.div`

display: flex;           
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 8.125rem;

>button{
    background: #1a1720;
    color: #fff;
    opacity: 0.8;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    padding: 0.8125rem 2.5rem;
    border-radius: 20px;
    border: none;
    outline: none;
    cursor: pointer;

    &.white{
        background-color: #fff;
        color: #1a1720;
        opacity: 0.65;
    }

    & + button{
            margin: 10px 0 0;
        }
    }

    @media(min-width: 600px){
        flex-direction: row;
        margin-bottom:  5.625rem;
        > button + button {
            margin: 0 0 0 10px;
        }
    }
`

