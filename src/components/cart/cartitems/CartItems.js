import React from 'react'
import { Title } from '../CartElements'
import CartItem from './cartItem/CartItem'
import { Container, ItemsContainer } from './CartItemsElements'


const CartItems = () => {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr />
            <ItemsContainer>
                <CartItem />
                <CartItem />

            </ItemsContainer>
        </Container>
    )
}

export default CartItems
