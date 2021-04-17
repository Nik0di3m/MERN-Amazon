import styled from 'styled-components'


export const HeaderContainer = styled.div`
    display: flex;    
    height: 60px;
    background-color: #0f1111;
    align-items: center;
    color: white;
    justify-content: space-between;
    padding-left: 11px;
    padding-right: 11px;
`

export const HeaderLogo = styled.div`



    img{
        width: 100px;
        height: auto;
        
    }
`

export const HeaderOptionAdress = styled.div`
    display: flex;
    align-items: center;
    padding-left: 9px;
`
export const OptionLineOne = styled.div`
    
`

export const OptionLineTwo = styled.div`
        font-weight: 700;
`


export const HeaderSearchBar = styled.div`

    display: flex;
    align-items: center;
    flex: 1;
`

export const HeaderSearachInput = styled.input`

    width: 100%;
    border-radius: 5px 0px 0px 5px;
    border: none;
    height: 30px;
    color: black;
    padding-left: 8px;

    :focus{
        outline: none;
    }
    
`
export const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    height: 32px;
    color: black;
    border-radius: 0px 5px 5px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderNavItems = styled.div`
    display: flex;

`

export const HeaderOption = styled.div`
    padding: 10px 9px;

`

export const HeaderOptionCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
        color: white;
    }
    
`
export const CartCount = styled.div`

`