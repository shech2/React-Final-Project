import React from 'react';
import {styled} from '@mui/system';
import {Badge, Search} from '@mui/icons-material';

const Constainer = styled(`div`)({
    height: `60px`,
    backgroundcolor: `black`,
});

const Wrapper = styled(`div`)({
    padding: `10px 20px`,
    display: `flex`,
    alignitems: `center`,
    justifycontent: `space-between`, 
 });

const Left = styled(`div`)({
    flex: `1`,
 });

const Language = styled(`span`)({
    fontsize: `14px`,
    cursor: `pointer`,
    display: `flex`,
    alignitems: `center`,
 });

const SearchContainer = styled(`div`)({
    border: `0.5px solid lightgray`,
    display: `flex`,
    alignitems: `center`,
    marginleft: `25px`,
    padding: `5px`,
 });

const Input = styled(`input`)({
    border: `none`,

});

const Logo = styled(`h1`)({
    fontweight: `bold`,
});

const Right = styled(`div`)({
    flex: `1`,
});

const Center = styled(`div`)({
    flex: `1`,
    textalign: `center`,
});

const MenuItem = styled(`div`)({
    fontsize: `14px`,
    cursor: `pointer`,
});

const Navbar = () => {
    return(
        <Constainer>
            <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search/>
                </SearchContainer>
            </Left>
            <Center><Logo>YSM-Sneakers.</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                       

                    </Badge>
                </MenuItem>
            </Right>
            </Wrapper>
        </Constainer>
    )
}

export default Navbar;