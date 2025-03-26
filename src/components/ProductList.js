// components/ProductList.js
import React from 'react';
import { useRouter } from 'next/router';
import product from "../components/Data";

const ProductList = () => {
  const router = useRouter();

  const handleProductClick = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="container-fluid px-5">
      <div className="row gap-4 justify-content-center">
        {productList.map((product) => (
          <div
            key={product.id}
            className="col-2 border rounded mt-2"
            onClick={() => handleProductClick(product.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="d-flex justify-content-center p-2">
              <img src={product.img} alt={product.model} className="product-size" />
            </div>
            <div className="py-2">
              <div className="d-flex justify-content-between px-2">
                <p className="m-0 font-bold font-size-12">{product.brand}</p>
                <p className="m-0 font-bold font-size-12">{product.model}</p>
              </div>
              <div className="px-2">
                <p className="m-0">
                  <span className="font-bold">₹</span> {product.price}
                </p>
                <p className="m-0 text-hiding">{product.space}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
