// import {  } from '@/fffff';
// import { ffff } from '@/types/fff';

import { ProductCard } from "@/components/app-content/novicell/ProductCard";
import { ProductList } from "@/components/app-parts/novicell/ProductList";

// import s from './fffff.module.scss';
type IProps = {
    Fffff: string;
};
export const Page = ( pr : IProps) => {

    const products = [1,2,3,4].map((prod, index) => (
        <ProductCard modelType={'search'} text={'hello'}/>
    ))
    return (
        <div className="product-page">
        <h1>Product</h1>
        <div>
            <ProductList products={products} colSpace={{ mob:6, sm: 4, lg: 3 }}/>
        </div>
        </div>
    );
};