import styled from 'styled-components'


export const ProductContainer = styled.div`
    background-color: white;
    z-index: 100;
    margin: 10px;
    padding: 20px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const Title = styled.span`

`

export const Price = styled.span`
    font-weight: 600;
    margin-top: 3px;

`
export const Rating = styled.div`
    display: flex;
`

export const Image = styled.img`
max-height: 200px;
object-fit: contain;

`

export const ActionSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`

export const AddToCartButtton = styled.button`

    width: 100px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    height: 30px;
    
`
