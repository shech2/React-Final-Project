import { styled } from '@mui/material/styles';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

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
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const[filters, setFilter] = useState({});
    const[sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value,
        });
    };

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="genre" onChange={handleFilters}>
                        <Option disabled>
                            Genre
                        </Option>
                        <Option>Romantic literature</Option>
                        <Option>youth</Option>
                        <Option>Children's Books</Option>
                        <Option>prose</Option>
                    </Select>
                    <Select name="topic" onChange={handleFilters}>
                        <Option disabled>
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
                    <Select onChange={(e)=> setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat = {cat} filters={filters} sort = {sort} />
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductList;
