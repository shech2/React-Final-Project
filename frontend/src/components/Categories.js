
import { styled } from '@mui/material/styles';
import { categories } from '../data';
import CategoryItem from './CategoryItem';


const Container = styled('div')({
    display: 'flex',
    padding: '20px',
    justifyContent: 'space-between',
});

const Categories = () => {
    return <Container>
        {categories.map(item => (
            <CategoryItem item={item} key={item.id} />
        ))}
    </Container>

};

export default Categories;