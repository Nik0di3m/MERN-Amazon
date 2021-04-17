import React from 'react'
import { HeaderContainer, HeaderSearchIconContainer, HeaderLogo, HeaderOptionAdress, HeaderSearachInput, HeaderSearchBar, OptionLineOne, OptionLineTwo, HeaderNavItems, HeaderOption, HeaderOptionCart, CartCount } from './HeaderElements.js'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <HeaderContainer>
                <HeaderLogo>
                    <Link to="/"><img src="https://i.imgur.com/7I9Was5.png" alt="" /></Link>
                </HeaderLogo>
                <HeaderOptionAdress>
                    <LocationOnIcon />
                    <HeaderOption>
                        <OptionLineOne>Hello</OptionLineOne>
                        <OptionLineTwo>Select Your Address</OptionLineTwo>
                    </HeaderOption>
                </HeaderOptionAdress>
                <HeaderSearchBar>
                    <HeaderSearachInput type="text" placeholder="Search..." />
                    <HeaderSearchIconContainer>
                        <SearchIcon />
                    </HeaderSearchIconContainer>
                </HeaderSearchBar>
                <HeaderNavItems>

                    <HeaderOption>
                        <OptionLineOne>
                            Hello Nikodem
                        </OptionLineOne>
                        <OptionLineTwo>
                            Account & List
                        </OptionLineTwo>
                    </HeaderOption>

                    <HeaderOption>
                        <OptionLineOne>
                            Returns
                        </OptionLineOne>
                        <OptionLineTwo>
                            & Orders
                        </OptionLineTwo>
                    </HeaderOption>

                    <HeaderOptionCart>
                        <Link to="/cart"><ShoppingBasketIcon /></Link>
                        <CartCount>
                            4
                        </CartCount>
                    </HeaderOptionCart>

                </HeaderNavItems>


            </HeaderContainer>
        </div>
    )
}

export default Header;
