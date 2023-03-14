import { styled } from '@mui/material/styles';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
const Container = styled('div')({



});

const FilterContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
});

const Title = styled('h1')({
    margin: '20px',
});

const Filter = styled('div')({
    margin: '20px',
});

const FilterText = styled('span')({
    fontSize: '20px',
    fontWeight: '600',
    marginRight: '20px',

});

const Select = styled('select')({
    padding: '10px',
    marginRight: '20px',
});

const Option = styled('option')({

});

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Books</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Category
                        </Option>
                        <Option>Romantic literature</Option>
                        <Option>youth</Option>
                        <Option>Children's Books</Option>
                        <Option>prose</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Topic
                        </Option>
                        <Option>Love</Option>
                        <Option>Science fiction and fantasy</Option>
                        <Option>Tension</Option>
                        <Option>Life</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
