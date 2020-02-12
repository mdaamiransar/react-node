import React from "react";
import CategoryList from "../components/category/CategoryList";
import CategoryForm from "../components/category/CategoryForm";
import CategoryContextProvider from '../contexts/CategoryContext';

const Category = () => {
    return (

        <CategoryContextProvider>
            <>
                <div id="main">
                    <div className="row">
                        {/* 
      <FormTop />
      */}
                        <div className="col s12">
                            <div className="container">
                                <div className="section"></div>
                                <div id="Form-advance" className="card card card-default scrollspy">

                                    <CategoryForm />

                                </div>

                                <CategoryList />

                            </div>

                        </div>

                    </div>
                </div>
            </>

        </CategoryContextProvider>
    );
}
export default Category;