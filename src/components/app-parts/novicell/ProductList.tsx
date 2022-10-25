// import {  } from '@/fffff';
// import { ffff } from '@/types/fff';
// import s from './fffff.module.scss';
type IProps = {
  products: JSX.Element[] | [];
  colSpace?: {
    mob: number;
    sm: number;
    lg: number;
  };
};
const defaultProps = {
  products: [],
  colSpace: {
    mob: 6,
    sm: 4,
    lg: 3,
  },
};
export const ProductList = (pr: IProps) => {
  pr = { 
    ...defaultProps,
    ...pr,
    colSpace: {...defaultProps.colSpace, ...pr.colSpace}
  };
  if (!pr.products.length) {
    return <div>No products.</div>;
  }
  return (
    <div className="grid">
      {pr.products.map((prod, index) => (
        <div
          className={`g-col-${pr.colSpace?.mob} g-col-sm-${pr.colSpace?.sm} g-col-lg-${pr.colSpace?.lg}`}
          key={`prod_${index}`}
        >
          {prod}
        </div>
      ))}
    </div>
  );
};
