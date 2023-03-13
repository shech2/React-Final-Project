import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    display: 'flex',
    background: 'coral',
    position: 'relative',
}));

const Arrow = styled('div')(({ theme, direction }) => ({
    width: '50px',
    height: '50px',
    backgroundColor: '#fff7f7',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: direction === "left" ? '10px' : 'auto',
    right: direction === "right" ? '10px' : 'auto',
    margin: 'auto',
}));

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeft />
            </Arrow>
            <Arrow direction="right">
                <ArrowRight />
            </Arrow>
        </Container>
    );
};

export default Slider;