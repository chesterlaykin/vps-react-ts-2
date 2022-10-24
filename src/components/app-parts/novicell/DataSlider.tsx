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

export const DataSlider = (pr: IProps) => {
  pr = { ...initialValues, ...pr };

//   const [maxValue, setMaxValue] = useState(100);
  const [internalValue, setInternalValue] = useState(0);

  useEffect(() => {
    setInternalValue(convertValue());
  });

  const convertValue = () => {
    if (pr.value === 1) return 0;
    if (pr.value > 100) return 100;
    if (pr.value < 0) return 0;

    return pr.value;
  };
  const designClassName = pr.design ? `data-slider-wrapper--design-${pr.design}`:'';
  return (
    <div className={  [s["data-slider-wrapper"],designClassName].join(" ")  }>
      <div className={s["slider-scale-values"]}>
        <>
        {pr.scaleValues && pr.scaleValues.map((value, index) => (
          <div key={`val_${index}`} className={s["slider-scale-values__value"]}>
            {value}
          </div>
        ))}
        {pr.headline && (
          <div className={s["slider-scale__headline"]}>{pr.headline}</div>
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
