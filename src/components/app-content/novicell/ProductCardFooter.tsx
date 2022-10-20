import { useMemo } from "react";

import s from './product-card-footer.module.scss';
interface IProps {
    usps: string[];
  }
export const ProductCardFooter = ( props : IProps) => {

const hasUsps = useMemo(() => {
    if (props.usps && props.usps.length) {
        const usps = props.usps.filter((usp) => usp.length);
        return usps.length > 0;
    }
    return false;
    },[props.usps]);

    return (
        <div className={s['card-footer']}>
        <div className={s['card-footer__top']}>
          <div className={s['top-section']}>
            <div className={s['top-section__headline']}>
              {hasUsps && <span>Bottom section headline</span>}
            
            </div>
          </div>
        </div>
        {hasUsps && 
          <div className={s['card-footer__bottom']}>
            <div className={s['usp-section']}>
              { props.usps.map((usp, index) => {
              return (<div 
                key={index}
                title={usp}
                className={s['usp-section__usp line-clamp-1']}
              >
                { usp }
              </div>)
              })}
            </div>
          </div>
        }
        icon
      </div>
    );
};