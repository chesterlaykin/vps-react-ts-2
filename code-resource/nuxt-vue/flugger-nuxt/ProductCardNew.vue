<template>
  <div ref="productCardWrapper" class="product-card">
    <ProductCardFrontsideNew v-bind="productProps" />
  </div>
</template>
<script lang="ts">
export default {
  name: "ProductCardNew",
};
</script>
<script setup lang="ts">
import { getExampleProd } from "~/dummy-data";
import { isDefined } from "~/utils";
import { ref, computed, onMounted } from "vue";

interface IProps {
  modelType: string;
  text: any;
}
const props = defineProps<IProps>();

let product = ref<any>({});

onMounted(() => {
  product.value = getExampleProd();
  console.log("onBeforeMount product.value", product.value);
});

const productProps: any = computed(() => {
  let prodProps = {};
  if (props.modelType === "search") {
    prodProps = {
      title: product.value.productName,
      image: product.value.primaryImage,
      usps: [product.value.usp1, product.value.usp2].filter(isDefined),
      priceFrom: cheapestVariantPriceFrom,
      priceBefore: cheapestVariantPriceBefore,
      productUrl: product.value.url,
      productType: product.value.productType,
      characteristicsRatings: {
        washabilityRating: product?.washabilityRating,
        glossRating: product.value.glossRating,
      },
    };
  }
  console.log("prodProps", prodProps);
  return prodProps;
});

const orig = ref({ stuff: [1, 2, 3] });

const test1 = ref({
  myProp: [1, 2, 3],
});
const getProp = computed(() => {
  test1.value.myProp.filter((num: any) => true);
});

const cheapestVariant = computed(() => {
  if (!variants.value) return product;

  return variants.value.reduce((lowest, current) => {
    if (!lowest?.price?.unitPrice?.amount || !current?.price?.unitPrice?.amount)
      return lowest;
    if (lowest.price.unitPrice.amount > current.price.unitPrice.amount) {
      return current;
    }
    return lowest;
  });
});

const variants = computed<any[]>(() => {
  return product?.variants;
});

const cheapestVariantPriceFrom = computed(() => {
  if (!cheapestVariant) return null;

  return cheapestVariant?.value.price?.unitPrice?.displayValue;
});
const cheapestVariantPriceBefore = computed(() => {
  if (!cheapestVariant || !product?.price?.hasDiscount) return null;

  return cheapestVariant?.value.price?.originalUnitPrice?.displayValue;
});

const productType = computed(() => {
  // This getter can be used to change which property we look at, incase the key is different on other models.
  return product?.productType;
});

const frontsideComponent = computed(() => {
  return "ProductCardFrontside";
});

const dryingTimeText = computed(() => {
  const attributesObject: Record<string, any> = {};

  if (product?.dryingTimeHours) {
    attributesObject.dryingTimeHours = {
      value: product.value.dryingTimeHours,
      property: "dryingTime",
    };
  }
  if (product?.dryingTimeRecoatableHours) {
    attributesObject.dryingTimeRecoatableHours = {
      value: product.value.dryingTimeRecoatableHours,
      property: "hours",
    };
  }
  if (product?.dryingTimeFullyCuredHours) {
    attributesObject.dryingTimeFullyCuredHours = {
      value: product.value.dryingTimeFullyCuredHours,
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
});
</script>

<style lang="scss" scoped>
.product-card {
  height: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 4%);
}
</style>
