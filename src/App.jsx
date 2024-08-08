
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import SearchBar from './components/SearchBar';
import UserTable from './components/UserTable';
import './style/App.css';

function App() {
    const [search, setSearch] = useState('');

    return (
        <Container>
            <h1 className='text-center mt-4'>User Filter</h1>
            <SearchBar search={search} setSearch={setSearch} />
            <UserTable filter={data} search={search} />
        </Container>
    );
}

export default App;
