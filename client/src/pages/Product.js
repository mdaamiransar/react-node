import React from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import ProductContextProvider from '../contexts/ProductContext';


const Product = () => {

   return (

      <ProductContextProvider>

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

                           <ProductForm />

                        </div>

                        <ProductList />

                     </div>

                  </div>

               </div>
            </div>
         </>

      </ProductContextProvider>
   );

}

export default Product;