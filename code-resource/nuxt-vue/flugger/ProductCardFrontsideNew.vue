<template>
  <div class="product-card-front">
    <div
      v-if="image && 'url' in image"
      class="product-card-front__image-wrapper"
    >
      <img class="product-card-front__image w-100" :src="image.url" />
    </div>
    <p v-else>no img</p>
    <a :href="productUrl" class="product-card-front__content">
      <div class="product-card-front__product-info">
        <div class="info-section">
          <div class="info-section__title line-clamp-2" :title="title">
            {{ title }}
          </div>
          <div class="info-section__price-wrapper">
            <div class="info-section__price">
              {{ "From: " + (priceFrom || "170") }}
            </div>

            <div v-if="priceBefore" class="info-section__discount">
              <s> {{ "Earlier price" + (priceBefore || "230") }} </s>
            </div>
          </div>
        </div>

        <div v-if="glossRating" class="product-card-front__sliders">
          <DataSliderNew
            :value="glossRating"
            :scale-values="glossScaleValues"
            :headline="'Shine'"
          />
        </div>
      </div>
    </a>
    <div class="product-card-front__footer">
      <ProductCardFooterNew v-if="usps && usps.length" :usps="usps" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ProductCardFrontsideNew",
};
</script>
<script async setup lang="ts">
import { computed } from "vue";

// const startTime = new Date();
// let timeImageSet = new Date();

// await new Promise((resolve) => {
//   const checkProp = () => {
//     setTimeout(() => {
//       console.log("setTimeout");
//       if (!props.image) {
//         console.log("no img!");
//         checkProp();
//       }
//     }, 5);
//     timeImageSet = new Date();
//     resolve(true);
//   };
//   checkProp();
// });
// const timeDiff = timeImageSet.getTime() - startTime.getTime();
// console.log(`img loaded in ${timeDiff} ms`);

interface IProps {
  image: any;
  title: string;
  usps: Array<String>;
  productUrl: any;
  priceFrom: any;
  priceBefore: any;
  productType: string;
  characteristicsRatings: any;
}

const props = withDefaults(defineProps<IProps>(), {
  image: null,
  title: "",
  productUrl: "",
  priceFrom: "1133",
  priceBefore: "1400",
  productType: "",
  characteristicsRatings: "",
});

const glossRating = computed(() => {
  const { glossRating } = props.characteristicsRatings;

  return glossRating && glossRating > 0 ? glossRating : false;
});

const glossScaleValues = computed(() => {
  return ["Matt", "Glossy"];
});
</script>

<style lang="scss" scoped>
.product-card-front {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--flugger-white-100);
  border-radius: 16px;

  &__image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    width: 184px;
    min-width: 184px;
    height: 156px;
    min-height: 156px;
    border-radius: 16px 16px 0 0;
    object-fit: cover;
    // &:deep img {
    //   object-fit: contain;
    // }
  }

  &__product-info {
    padding-top: 36px;
    background: rgb(255, 238, 198);
    flex-grow: 1;
    min-height: 52px;
    padding-bottom: 16px;
    padding-inline: 24px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  &__footer {
    min-height: 112px;
    background-color: var(--flugger-blue-100);
    border-radius: 0 0 16px 16px;
  }

  &__sliders {
    min-height: 38px;
    margin-bottom: 19px;
  }
}

.info-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 50px;

  &__title {
    flex: 1;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-medium);
    line-height: var(--line-height-medium);
  }

  &__price-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-end;
  }

  &__price {
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-medium);
    line-height: var(--line-height-medium);
  }

  &__discount {
    color: var(--flugger-black-70);
  }
}
</style>
