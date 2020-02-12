import React, { useContext, useState } from 'react'
import { CategoryContext } from '../../contexts/CategoryContext';

const CategoryForm = () => {

    const { dispatch } = useContext(CategoryContext);

    const [categoryId, setCategoryId] = useState('');
    const [name, setName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_CATEGORY',
            payload: {
                categoryId, name
            }
        });

        console.log(name + ' :: ' + categoryId);

        setCategoryId('');
        setName('');
    }

    return (
        <form onSubmit={handleSubmit} className="col s12">
            <div className="row">

                <div className="input-field col m6 s12">
                    <input type="text" id="categoryId" name="categoryId" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="validate" required aria-required="true" />
                    <label for="categoryId">Category Id</label>
                </div>

                <div className="input-field col m6 s12">
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="validate" required aria-required="true" />
                    <label for="name">Name</label>
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

export default CategoryForm;