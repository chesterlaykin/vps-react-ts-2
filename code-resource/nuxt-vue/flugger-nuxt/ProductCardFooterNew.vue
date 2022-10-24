<template>
  <div class="card-footer">
    <div class="card-footer__top">
      <div class="top-section">
        <div class="top-section__headline">
          <span v-if="hasUsps">Bottom section headline</span>
        
        </div>
      </div>
    </div>
    <div v-if="hasUsps" class="card-footer__bottom">
      <div class="usp-section">
        <div
          v-for="(usp, index) in usps"
          :key="index"
          :title="usp"
          class="usp-section__usp line-clamp-1"
        >
          {{ usp }}
        </div>
      </div>
    </div>
    icon
  </div>
</template>

<script setup lang="ts">

// <TheIcon
//       class="top-section__plus-icon"
//       alias="plus"
//       type="medium"
//       size="normal"
//     />
// {{ $t('B2C.Product.Card.BottomSectionHeadline') }}

import { computed } from "vue";

interface IProps {
  usps: string[];
}
const props = defineProps<IProps>();

const hasUsps = computed(() => {
  if (props.usps && props.usps.length) {
    const usps = props.usps.filter((usp) => usp.length);
    return usps.length > 0;
  }
  return false;
});
</script>

<style lang="scss" scoped>
.card-footer {
  color: white;
  display: flex;
  flex-direction: column;
  padding: 24px;
  padding-top: 18px;

  &.flippable:hover {
    cursor: pointer;
  }

  &__top {
    margin-bottom: 8px;
  }
}

.top-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  &__headline {
    color: var(--flugger-blue-40);
    font-size: var(--font-size-small);
    line-height: var(--line-height-small);
  }

  &__plus-icon {
    color: var(--flugger-white-100);
  }
}

.usp-section {
  &__usp {
    margin-bottom: 4px;
    color: var(--flugger-white-100);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-small);
    line-height: var(--line-height-small);

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
