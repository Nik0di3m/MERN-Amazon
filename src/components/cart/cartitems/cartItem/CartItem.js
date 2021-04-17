import React from 'react'
import { Container, ItemBottomInfo, ItemDelete, ItemImage, ItemInfo, ItemPrice, ItemQuantity, ItemTopInfo } from './CartItemElements'

const CartItem = () => {
    return (
        <Container>
            <ItemImage>
                <img src="https://ispot.pl/img/imagecache/14001-15000/575x680/1/680x680/product-media/14001-15000/Apple-iPad-Pro-12-9-quot-Wi-Fi-512GB-gwiezdna-szarosc-7511-680x680.webp" alt="" />
            </ItemImage>
            <ItemInfo>
                <ItemTopInfo>
                    <h2>Lorem lorem ipsum dolor sit amet, consectetur adipisIpsum</h2>
                </ItemTopInfo>
                <ItemBottomInfo>
                    <ItemQuantity>5</ItemQuantity>
                    <ItemDelete>Delete</ItemDelete>
                </ItemBottomInfo>
            </ItemInfo>
            <ItemPrice>
                $444
            </ItemPrice>
        </Container>
    )
}

export default CartItem
