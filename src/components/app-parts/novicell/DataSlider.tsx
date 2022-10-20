// import {  } from '@/fffff';
// import { ffff } from '@/types/fff';

import { useEffect, useState } from "react";

import s from "./dataslider.module.scss";

type IProps = {
  value: number;
  headline: string;
  scaleValues: string[];
  design?: string;
};
const initialValues = {
  value: 0,
};

export const DataSlider = (props: IProps) => {
  props = { ...initialValues, ...props };

//   const [maxValue, setMaxValue] = useState(100);
  const [internalValue, setInternalValue] = useState(0);

  useEffect(() => {
    setInternalValue(convertValue());
  });

  const convertValue = () => {
    if (props.value === 1) return 0;
    if (props.value > 100) return 100;
    if (props.value < 0) return 0;

    return props.value;
  };
  const designClassName = props.design ? `data-slider-wrapper--design-${props.design}`:'';
  return (
    <div className={  [s["data-slider-wrapper"],designClassName].join(" ")  }>
      <div className={s["slider-scale-values"]}>
        <>
        {props.scaleValues.map((value, index) => {
          <div key={`val_${index}`} className={s["slider-scale-values__value"]}>
            {value}
          </div>;
        })}
        {props.headline && (
          <div className={s["slider-scale__headline"]}>{props.headline}</div>
        )}
        </>
      </div>
      <div className={s["data-slider"]}>
        <div
          className={s["line-container"]}
          style={{ "--internal-value": internalValue } as React.CSSProperties}
        >
          <div
            className={s["line-container__line"]}
            title={`${internalValue}%`}
          ></div>
        </div>
      </div>
    </div>
  );
};
