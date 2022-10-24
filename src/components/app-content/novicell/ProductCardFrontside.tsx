// import {  } from '@/fffff';
// import { ffff } from '@/types/fff';
import { DataSlider } from "@/components/app-parts/novicell/DataSlider";
import s from "./product-card-frontside.module.scss";
import { ProductCardFooter } from "./ProductCardFooter";

type IProps = {
  image: any;
  title: string;
  usps: Array<string>;
  productUrl: any;
  priceFrom: any;
  priceBefore: any;
  productType: string;
  characteristicsRatings: any;
};

const defaultProps = {
  image: null,
  title: "",
  productUrl: "",
  priceFrom: "1133",
  priceBefore: "1400",
  productType: "",
  characteristicsRatings: "",
};

export const ProductCardFrontSide = (pr: IProps) => {
  pr = { ...defaultProps, ...pr };

  const { glossRating: glossR } = pr.characteristicsRatings;

  const glossRating = glossR && glossR > 0 ? glossR : false;

  const glossScaleValues = ["Matt", "Glossy"];

  return (
    <div className={s["product-card-front"]}>
      {pr.image && "url" in pr.image && (
        <>
          <div className={s["product-card-front__image-wrapper"]}>
            <img
              className={ [s["product-card-front__image"], "w-100"].join(" ") }
              src={pr.image.url}
            />
          </div>
          <a href={pr.productUrl} className={s["product-card-front__content"]}>
            <div className={s["product-card-front__product-info"]}>
              <div className={s["info-section"]}>
                <div className={s["info-section__title line-clamp-2"]}>
                  {pr.title}
                </div>
                <div className={s["info-section__price-wrapper"]}>
                  <div className={s["info-section__price"]}>
                    {"From: " + (pr.priceFrom || "170")}
                  </div>

                  <div
                    v-if="priceBefore"
                    className={s["info-section__discount"]}
                  >
                    <s> {"Earlier price" + (pr.priceBefore || "230")} </s>
                  </div>
                </div>
              </div>

              <div
                v-if="glossRating"
                className={s["product-card-front__sliders"]}
              >
                <DataSlider
                  value={glossRating}
                  scaleValues={glossScaleValues}
                  design={'blue'}
                  headline={"Shine"}
                />
              </div>
            </div>
          </a>
          <div className={s["product-card-front__footer"]}>
            {pr.usps && pr.usps.length && <ProductCardFooter usps={pr.usps} />}
          </div>
        </>
      )}
    </div>
  );
};
