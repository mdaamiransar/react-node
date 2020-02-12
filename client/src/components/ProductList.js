import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductDetails from './ProductDetails';

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return products.length ? (

    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <h4 className="card-title">Page Length Options</h4>
            <div className="row">
              <div className="col s12">
                <table id="page-length-option" className="display">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Product ID</th>
                      <th>Category Id</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(p => {
                      return (<ProductDetails product={p} key={p.id} />);
                    })}

                  </tbody>
                  <tfoot>
                    <tr>
                      <th>ID</th>
                      <th>Product ID</th>
                      <th>Category Id</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
      <div className="row text-center"><h5>ProductList is empty</h5></div>
    )
}

export default ProductList;
