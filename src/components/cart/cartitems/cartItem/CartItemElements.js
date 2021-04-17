import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
`

export const ItemImage = styled.div`
    display: flex;
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 16px;

    img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

`
export const ItemInfo = styled.div``

export const ItemTopInfo = styled.div`
    color: #007185;
    h2{
        font-size: 18px;
    }

`

export const ItemBottomInfo = styled.div`
    display: flex;
    margin-top: 4px;
`

export const ItemQuantity = styled.div``

export const ItemDelete = styled.div`
    color: #007185;
    margin-left: 15px;
    cursor: pointer;
`

export const ItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
`