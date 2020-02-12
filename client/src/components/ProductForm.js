import React, { useContext, useState } from 'react'
import { ProductContext } from '../contexts/ProductContext';

const ProductForm = () => {

    // const { addProduct } = useContext(ProductContext);
    const { dispatch } = useContext(ProductContext);

    const [productId, setProductId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // addProduct(categoryId, name, price, description, creationDate, status);
        dispatch({
            type: 'ADD_PRODUCT', product: {
                productId, categoryId, name, price, description, creationDate, status
            }
        });

        console.log(name + ' ' + description + ' ' + price + ' ' + creationDate);
        setProductId('');
        setCategoryId('');
        setName('');
        setPrice('');
        setDescription('');
        setCreationDate('');
        setStatus('');
    }

    return (
        <form onSubmit={handleSubmit} className="col s12">
            <div className="row">

                <div className="input-field col m6 s12">
                    <input type="text" id="productId" name="productId" value={productId} onChange={(e) => setProductId(e.target.value)} className="validate" required aria-required="true" />
                    <label for="productId">Product Id</label>
                </div>

                <div className="input-field col m6 s12">
                    <select id="categoryId" name={categoryId} value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                        <option value="" disabled selected>Select Category</option>
                        <option value="1">Fashion</option>
                        <option value="2">Electronics</option>
                        <option value="3">Shoes</option>
                    </select>
                    <label>Select Category</label>
                </div>

                <div className="input-field col m6 s12">
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="validate" required aria-required="true" />
                    <label for="name">Name</label>
                </div>

                <div className="input-field col m6 s12">
                    <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} className="validate" />
                    <label for="price">Price</label>
                </div>

                <div className="input-field col m6 s12">
                    <input type="date" id="creationDate" name="creationDate" value={creationDate} onChange={(e) => setCreationDate(e.target.value)} className="datepicker" />
                    <label for="creationDate">Creation Date</label>
                </div>

                <div className="input-field col s12">
                    <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="materialize-textarea"></textarea>
                    <label for="description">Description</label>
                </div>

                <div className="input-field col m6 s12">
                    <select id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="" disabled selected>Select Status</option>
                        <option value="1">Active</option>
                        <option value="2">Inactive</option>
                    </select>
                    <label>Select Status</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <button className="btn cyan waves-effect waves-light right" type="submit" name="action">Submit
                           <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default ProductForm;