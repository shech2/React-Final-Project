
import styled from "@emotion/styled";

const Container = styled('div')({
    height: '30px',
    backgroundColor: 'teal',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: '500',
});

const Announcement = () => {
    return (
        <Container>
            Super Deal For Passover 2023! Free Shipping on Orders Over $50
        </Container>
    )
}

export default Announcement
