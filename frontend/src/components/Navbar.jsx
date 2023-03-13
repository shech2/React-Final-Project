import React from 'react';
import styled from 'styled-components';
import {Search} from '@material-ui/icons/Search';

const Constainer = styled.div`
    height: 60px;
    background-color: black;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    `;

const Left = styled.div`
    flex: 1;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;

`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
`; 

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;`;

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