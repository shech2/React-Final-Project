import { useState } from 'react';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { sliderItems } from '../data';

const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
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
    cursor: 'pointer',
    opacity: '0.5',
    zIndex: '2',
}));

const Wrapper = styled('div')(({ slideIndex }) => ({
    height: '100%',
    display: 'flex',
    transform: `translateX(-${slideIndex * 100}vw)`,
    transition: 'all 1.5s ease',
}));

const Slide = styled('div')(({ bg }) => ({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: bg,
}));

const Image = styled('img')({
    height: '80%',
    backgroundColor: 'inherit',
});

const InfoContainer = styled('div')({
    flex: 1,
    padding: '50px',
});

const Title = styled('h1')({
    fontSize: '70px',
});

const Desc = styled('p')({
    margin: '50px 0px',
    fontSize: '20px',
    letterSpacing: '3px',
});


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex((prev) => (prev > 0 ? prev - 1 : 1));
        } else {
            setSlideIndex((prev) => (prev < 1 ? prev + 1 : 0));
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick('left')}>
                <ArrowLeft />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <Image src={item.img} />
                        <InfoContainer>
                            <Title variant="h1">{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick('right')}>
                <ArrowRight />
            </Arrow>
        </Container>
    );
};

export default Slider;
