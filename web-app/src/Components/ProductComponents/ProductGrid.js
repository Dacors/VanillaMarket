import React, {useState, useEffect} from 'react';

import Product from './Product';

const API = process.env.REACT_APP_FLASK_API;

const ProductGrid = () => {

    const [products, setProducts] = useState([]);
    const [productsFilter, setProductsFilter] = useState([]);
    
    function KeyUpFilterHandler(e){
        var criteria = String(e.target.value);
        var filterProds = products.filter(e => e.description.includes(String(criteria)));
        setProductsFilter(filterProds);        
    }

    async function getProds() {
        const prods = await fetch(`${API}/products`)
        const data = await prods.json();
        setProducts(data)
        setProductsFilter(data);
    }

    useEffect(() => {
        getProds();
    },[])

    
    return(
        <div className="list-group flex-column">
            <input className="form-control mb-2" onKeyUp={KeyUpFilterHandler} id="SearchInput" type="text" placeholder="Search.."></input>
            {productsFilter.map((e) => <Product key={e._id} product={e} getProds={getProds}/>)}        
                 
        </div>
    )
    
}

export default ProductGrid