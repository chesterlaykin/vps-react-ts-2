// import {  } from '@/fffff';
// import { ffff } from '@/types/fff';

import { ProductCard } from "@/components/app-content/novicell/ProductCard";

// import s from './fffff.module.scss';
type IProps = {
    Fffff: string;
};
export const Page = ( pr : IProps) => {

    return (
        <div className="product-page">
            <h1>Product</h1>
        <div className="container">
            <div className="grid">
                { [1,2,3,4].map ((prod, index) => (
                     <div className="g-col-sm-4">
                     <ProductCard modelType={'search'} text={'hello'}/>
                     </div>
                ))}
               
                
            </div>
        </div>
        </div>
    );
};