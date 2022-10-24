<template>
  <div
    class="data-slider-wrapper"
    :class="design ? `data-slider-wrapper--design-${design}` : ''"
  >
    <div class="slider-scale-values">
      <div
        v-for="value in scaleValues"
        :key="value"
        class="slider-scale-values__value"
      >
        {{ value }}
      </div>
      <div v-if="headline" class="slider-scale__headline">
        {{ headline }}
      </div>
    </div>
    <div class="data-slider">
      <div class="line-container" :style="`--internal-value:${internalValue}`">
        <div class="line-container__line" :title="`${internalValue}%`"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface IProps {
  value: number;
  headline: string;
  scaleValues: string[];
  design?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  value: 0,
});

const internalValue = ref(0);
const maxValue = ref(100);

// const determineValueThresholds = computed(() => {
//     return maxValue.value / props.scaleValues.length;
// })

onMounted(() => {
  internalValue.value = convertValue();
});

const convertValue = () => {
  if (props.value === 1) return 0;
  if (props.value > 100) return 100;
  if (props.value < 0) return 0;

  return props.value;
};
</script>

<style lang="scss" scoped>
.data-slider-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 38px;
  margin-top: 16px;
  margin-bottom: 24px;

  .slider-scale-values {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 8px;

    &__value {
      color: var(--flugger-black-70);
    }
  }

  .slider-scale__headline {
    position: absolute;
    left: 50%;
    color: var(--flugger-black-100);
    text-align: center;
    // background: var(--flugger-white-100);
    transform: translateX(-50%);
    // padding-inline: 10px;
  }

  .data-slider {
    position: relative;
    width: 100%;
    height: 6px;
    overflow-x: hidden;
    background-color: var(--flugger-blue-20);
    border-radius: 16px;

    .line-container {
      --line-width: 38px;
      --adjusted-width: calc(100% - var(--line-width));

      position: absolute;
      top: var(--internal-value) px;
      left: calc(var(--internal-value) * calc(var(--adjusted-width / 100)));
      width: var(--line-width);
      height: 6px;
      overflow-x: hidden;
      background-color: white;
      border-radius: 16px;

      &__line {
        width: 32px;
        height: 6px;
        background-color: var(--flugger-blue-100);
        border-radius: 16px;
        transform: translateX(3px);
      }
    }
  }

  &--design-blue {
    .slider-scale__headline {
      color: var(--flugger-white-100);
      background: var(--flugger-blue-100);
    }

    .slider-scale-values {
      &__value {
        color: var(--flugger-blue-40);
      }
    }

    .data-slider {
      background-color: var(--flugger-blue-80);

      .line-container {
        background-color: var(--flugger-blue-100);

        &__line {
          background-color: var(--flugger-white-100);
        }
      }
    }
  }
}
</style>
