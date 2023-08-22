import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import the axios library
import './List.css';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dhruvj02.pythonanywhere.com/api/store/7d9f6272-781e-4a33-9cc1-020167be40b3/product', {
                    headers: {
                        Authorization: 'Token 543c793bba983edb993f167c8f01586cc4fbd49b'
                    }
                });

                if (response.status === 200) {
                    setProducts(response.data.results); // Set the fetched product data to the state
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
      <div>
          <div className="container">
            <h1>Product List</h1>
            <div className="product-container">
                {products.map(product => (
                    <div key={product.product_id} className="product-card" style={{ display: 'flex', flexDirection: 'row' }}>
                        <img style={{ width: '400px' }} src={product.product_primary_image.image}
                            alt={`Image of ${product.product_name}`} className="product-image" />
                        <div className="product-details" style={{ textAlign: 'left' }}>
                            <h2>{product.product_name}</h2>
                            <h5 style={{ color: '#1273b8' }}><strong>Available</strong></h5>
                            <p>{product.product_description}</p>
                            <p className="price">${product.product_price}</p>
                            <div className='button-div-list' style={{ display:'flex',gap:'20px'}}>
                                <button type="button" className="navbar-button-l">Add To Card</button>
                                <button type="button" className="navbar-button-l">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    );
}

export default App;
