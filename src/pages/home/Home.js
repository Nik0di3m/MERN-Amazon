import React, { useEffect, useState } from 'react'
import Product from '../../components/product/Product';
import { Banner, Content, HomeContainer } from './HomeElements';
import { product } from "../../fakeDB/product"
const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(product)
    }, [])

    return (
        <HomeContainer>
            <Banner />
            <Content>
                {products.map((item) => (
                    <Product
                        title={item.title}
                        price={item.price}
                        star={item.star}
                        image={item.image}
                    />
                ))}
            </Content>
        </HomeContainer>
    )
}

export default Home;
