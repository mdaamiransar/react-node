import React, { useContext } from 'react';
import { CategoryContext } from '../../contexts/CategoryContext';
import CategoryDetails from './CategoryDetails';

const CategoryList = () => {
    const { categories } = useContext(CategoryContext);

    return categories.length ? (

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
                                            <th>Id</th>
                                            <th>Category Id</th>
                                            <th>Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categories.map(p => {
                                            return (<CategoryDetails category={p} key={p.id} />);
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Id</th>
                                            <th>Category Id</th>
                                            <th>Name</th>
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
            <div className="row text-center"><h5>CategoryList is empty</h5></div>
        )
}

export default CategoryList;
