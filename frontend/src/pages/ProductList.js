import { styled } from '@mui/material/styles';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicRequest } from '../requestMethods';

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
    const str = location.pathname.split("/")[2].replace(/%20/g, " ");
    const cat = str;
    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState("newest");
    const [author, setAuthor] = useState([]);
    const [topic, setTopic] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleFilters = (e) => {
        const value = e.target.value;
        // if the value is "Genre" or "Topic", then return all products
        if (value === "Author" || value === "Topic") {
            setFilter({});
            return;
        };

        setFilter({
            ...filters,
            [e.target.name]: value,
        });
    };

    useEffect(() => {
        const getProductByCat = async () => {
            try {
                const res = await publicRequest.get("/products?category=" + cat);
                // iterate through the products and get the unique genre and topic
                console.log(res.data);
                const authorSet = new Set();
                const topicSet = new Set();
                res.data.map((product) => {
                    product.Author.map((g) => authorSet.add(g));
                    product.topic.map((t) => topicSet.add(t));
                });
                setAuthor([...authorSet]);
                setTopic([...topicSet]);
            } catch (err) {
                console.log(err);
            }
        };
        getProductByCat();
    }, [cat]);


    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="Author" onChange={handleFilters}>
                        <Option disabled>
                            Authors
                        </Option>
                        {author.map((c) => (
                            <Option key={c}>{c}</Option>
                        ))}
                    </Select>
                    <Select name="topic" onChange={handleFilters}>
                        <Option>
                            Topic
                        </Option>
                        {topic.map((c) => (
                            <Option key={c}>{c}</Option>
                        ))}
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductList;
