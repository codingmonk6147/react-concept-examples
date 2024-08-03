import React, { useState } from 'react';

function Typeahead({ items }) {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const handleChange = (e) => {
        const query = e.target.value;
        setQuery(query);
        setFilteredItems(items.filter(item => item.toLowerCase().includes(query.toLowerCase())));
    };

    return (
        <div>
            <input type="text" value={query} onChange={handleChange} />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Typeahead;
