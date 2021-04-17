import styled from 'styled-components'

export const HomeContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`

export const Banner = styled.div`
    background-image: url('https://i.imgur.com/SYHeuYM.jpg');
    min-height: 600px;
    background-size: cover;
    background-position: center;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    z-index: 1;
    
`

export const Content = styled.div`

    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    z-index: 100;
    display: flex;
    flex-wrap: wrap;
`
