 



// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import axios from 'axios';
// import './ProductList.css';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const observer = useRef(null);
//   const PLATFORM = navigator.userAgent.includes('Mobile') ? 'mobile' : 'web';

//   const lastProductElementRef = useCallback((node) => {
//     if (loading) return;
//     if (observer.current) observer.current.disconnect();
//     observer.current = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         setPage((prevPage) => prevPage + 1);
//       }
//     });
//     if (node) observer.current.observe(node);
//   }, [loading]);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.post(
//           'https://api.furrl.in/api/v2/listing/getListingProducts',
//           {
//             input: {
//               page,
//               pageSize: 10,
//               filters: [],
//               id: '#HomeHunts',
//               entity: 'vibe'
//             }
//           },
//           {
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': '3f84b243832ffe57af2c36ebc1b769f5',
//               'device_id': '18fa58b5b5d751-08f16c940db7d-26001c51-e1000-18fa58b5b5e751',
//               'platform': PLATFORM
//             }
//           }
//         );

//         const newProducts = response.data.data.getListingProducts.products;
//         setProducts((prevProducts) => {
//           const uniqueProducts = new Set([...prevProducts.map(p => p.id), ...newProducts.map(p => p.id)]);
//           return [...uniqueProducts].map(id => newProducts.find(p => p.id === id) || prevProducts.find(p => p.id === id));
//         });
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [page]);

//   return (
//     <div className="product-list">
//       {products.map((product, index) => (
//         <div 
//           key={product.id} 
//           className="product-item" 
//           ref={index === products.length - 1 ? lastProductElementRef : null}
//         >
//           <img src={product.images[0].src} alt={product.title} />
//           <div className="product-info">
//             <h2>{product.title}</h2>
//             <p>Price: {product.price.value} {product.price.currency}</p>
//           </div>
//         </div>
//       ))}
//       {loading && <div>Loading...</div>}
//     </div>
//   );
// };

// export default ProductList;

import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef(null);
  const PLATFORM = navigator.userAgent.includes('Mobile') ? 'mobile' : 'web';

  const lastProductElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          'https://api.furrl.in/api/v2/listing/getListingProducts',
          {
            input: {
              page,
              pageSize: 10,
              filters: [],
              id: '#HomeHunts',
              entity: 'vibe'
            }
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'YOUR_ACCESS_TOKEN',
              'device_id': 'YOUR_DEVICE_ID',
              'platform': PLATFORM
            }
          }
        );

        const newProducts = response.data.data.getListingProducts.products;
        setProducts((prevProducts) => {
          const uniqueProducts = new Set([...prevProducts.map(p => p.id), ...newProducts.map(p => p.id)]);
          return [...uniqueProducts].map(id => newProducts.find(p => p.id === id) || prevProducts.find(p => p.id === id));
        });
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div>
      <div className="list-top-section">
        <div 
          className="vibe-page-top-background" 
          style={{ backgroundImage: 'url("https://cdn.furrl.in/vibes/VibeCard_HomeHunts.jpg")' }}>
          <p className="vibe-page-top-title">#NightFlea</p>
        </div>
      </div>
      <div className="product-section-title">
        <p>Products</p>
      </div>
      <div className="product-navigation">
        <button>All</button>
        <button>Home</button>
        <button>Apparel</button>
        <button>Accessories</button>
      </div>
      <div className="product-list">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className={`product-item ${((index + 1) % 5 === 0) ? 'double-width' : ''}`} 
            ref={index === products.length - 1 ? lastProductElementRef : null}
          >
            <img src={product.images[0].src} alt={product.title} />
            <button class="share-button"><i class="fas fa-share-alt"></i></button>
            <div className="product-info">
              <h2>{product.title}</h2>
              <p>Price: {product.price.value} {product.price.currency}</p>
            </div>
          </div>
        ))}
        {loading && <div>Loading...</div>}
      </div>
    </div>
  );
};

export default ProductList;
