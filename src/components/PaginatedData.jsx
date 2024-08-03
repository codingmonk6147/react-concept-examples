import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PaginatedData() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage; //10
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; //10-10 = 0
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <ul>
                {currentItems.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            <div>
                {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(num => (
                    <button key={num} onClick={() => paginate(num + 1)}>
                        {num + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PaginatedData;
