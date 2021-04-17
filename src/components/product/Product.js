import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../features/cartSlice'
import { ActionSection, AddToCartButtton, Image, Price, ProductContainer, Rating, Title } from './ProductElements'

const Product = ({ title, price, star, image }) => {

    const dispatch = useDispatch()

    return (
        <ProductContainer>
            <Title>
                {title}
            </Title>
            <Price>
                {price}
            </Price>
            <Rating>
                {
                    Array(star)
                        .fill()
                        .map(rating => <p>⭐</p>)
                }
            </Rating>
            <Image src={image} />
            <ActionSection>
                <AddToCartButtton onClick={() => dispatch(increment())}>
                    AddToCart
            </AddToCartButtton>

            </ActionSection>

        </ProductContainer>
    )
}

export default Product

