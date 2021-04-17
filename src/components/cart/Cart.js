import React, { useEffect, useState } from 'react'
import { selectUser } from '../../features/userSlice';
import { useSelector, useStore } from 'react-redux'
import { Container } from './CartElements';
import CartItems from './cartitems/CartItems';
import CartTotal from './carttotal/CartTotal';
const Cart = () => {

    const user = useSelector(selectUser)

    const [name, setName] = useState([])

    useEffect(() => {
        setName(user)
        console.log(user)
    }, [])

    return (
        <Container>
            <CartItems />
            <CartTotal />
        </Container>
    )
}

export default Cart;
