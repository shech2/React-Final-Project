import React from 'react';
import styled from 'styled-components';

const Constainer = styled.div`
    height: 60px;
    background-color: black;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between; 
    `;

const Left = styled.div`
    flex: 1;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;`;

const Right = styled.div`
    flex: 1;
`; 

const Center = styled.div`
    flex: 1;
`;

const Navbar = () => {
    return(
        <Constainer>
            <Wrapper>
            <Left>
                <Language>EN</Language>
            </Left>
            <Center>center</Center>
            <Right>right</Right>
            </Wrapper>
        </Constainer>

        
    )
}

export default Navbar;