import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InfiniteScrollApp() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = () => {
            axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
                .then(res => setData(prevData => [...prevData, ...res.data]))
                .catch(err => console.log(err));
        };

        fetchData();
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            setPage(prevPage => prevPage + 1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default InfiniteScrollApp;
