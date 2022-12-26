import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftside = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/hotel-category')
            .then(res => res.json())
            .then(data => setCategories(data));
    })
    return (
        <div>
            <h1>All Category:</h1>
            {
                categories.map(name => 
                <p key={name.id}>
                    <Link>{name.category}</Link>
                </p>)
            }
        </div>
    );
};

export default Leftside;