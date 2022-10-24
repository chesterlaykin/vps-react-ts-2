import { getExampleProd } from "@/dummy-data";
import { isDefined } from "@/utils";
import { useRef, useState, useMemo } from "react";
import s from './product-card.module.scss';
import { ProductCardFrontSide } from "./ProductCardFrontside";

type IProps = {
  modelType: string;
  text: any;
};
export const ProductCard = ({ modelType, text }: IProps) => {
  const [product, setProduct] = useState(getExampleProd());

  const {variants} = product;

  const productCardWrapper = useRef(null);

  const cheapestVariant = useMemo(() => {
    if (!variants || !(variants instanceof Array)) {
      return product;
    }

    return variants.reduce((lowest, current) => {
      if (
        !lowest?.price?.unitPrice?.amount ||
        !current?.price?.unitPrice?.amount
      )
        return lowest;
      if (lowest.price.unitPrice.amount > current.price.unitPrice.amount) {
        return current;
      }
      return lowest;
    });
  }, [product, variants]);

  const cheapestVariantPriceFrom = !cheapestVariant ? null : cheapestVariant?.price?.unitPrice?.displayValue;

  const cheapestVariantPriceBefore = !cheapestVariant || !product?.price?.hasDiscount ? null
  : cheapestVariant?.price?.originalUnitPrice?.displayValue;

  const productProps: any = useMemo(() => {
    let prodProps = {};
    if (modelType === "search") {
      prodProps = {
        title: product.productName,
        image: product.primaryImage,
        usps: [product.usp1, product.usp2].filter(isDefined),
        priceFrom: cheapestVariantPriceFrom,
        priceBefore: cheapestVariantPriceBefore,
        productUrl: product.url,
        productType: product.productType,
        characteristicsRatings: {
          washabilityRating: product?.washabilityRating,
          glossRating: product.glossRating,
        },
      };
    }
    return prodProps;
  }, [modelType]);


  const dryingTimeText = useMemo(() => {

    const attributesObject: Record<string, any> = {};
  
    if (product?.dryingTimeHours) {
      attributesObject.dryingTimeHours = {
        value: product.dryingTimeHours,
        property: "dryingTime",
      };
    }

    if (product?.dryingTimeRecoatableHours) {
      attributesObject.dryingTimeRecoatableHours = {
        value: product.dryingTimeRecoatableHours,
        property: "hours",
      };
    }

    if (product?.dryingTimeFullyCuredHours) {
      attributesObject.dryingTimeFullyCuredHours = {
        value: product.dryingTimeFullyCuredHours,
        property: "days",
      };
    }
  
    if (!Object.entries(attributesObject).length) return null;
  
    const combinedDictionaries: any[] = [];
    Object.entries(attributesObject).forEach(([key, attribute]) => {
      if (!attribute) return;
      const textString = `text string`;
      // const textString = `${$tc(`B2C.Product.DetailsPage.ProductInformations.${key}`, attribute.value, {
      //   [attribute.property]: attribute.value
      // })}`;
      combinedDictionaries.push(textString);
    });
  
    return combinedDictionaries;
  },[product]);

  return (
    <div ref={productCardWrapper} className={s["product-card"]}>
      <ProductCardFrontSide {...productProps} />
    </div>
  );
};
