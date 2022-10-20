<template lang="">
    
 <div class="sb-link" :style="cssVars.value">
    <p>SBLinkButtonV3</p>
   <a v-if="buttonData" :href="buttonData.link || ''" :target="target">
     {{ buttonData.text }}
   </a>
   <!-- <p>{{buttonData.}}</p> -->
 </div>
</template>
<script lang="ts">
export default {
 name: "SBLinkButtonNew",
};
</script>
<script setup lang="ts">
import { ref, reactive, computed, defineComponent } from "vue";
import type { ISBLinkButton } from "@/types/common";
interface IProps {
 buttonData?: ISBLinkButton;
 bgColor?: string;
}
// const defaults = {

// }
const props = defineProps<IProps>();

const cssVars = ref({
 "--bg-color": props.bgColor ?? null,
});

// const target: any = computed(() => {
//       return props.buttonData.targetBlank ? "_blank" : null;
// });
</script>

<style lang="scss">
//Temporary colors
$item-bg-color: rgb(77, 129, 234);

.sb-link {
 background: var(--bg-color); //$item-bg-color;
 cursor: pointer;
 font-weight: bold;
 display: inline-block;
 color: rgb(48, 48, 48);

 border-radius: 1px;
 border: 1px solid black;
 > a {
   padding-block: 13px;
   padding-inline: 19px;
   display: inline-block;
   color: black;
 }
 &:hover {
   background: rgb(174, 174, 174);
   border: 1px solid rgb(134, 134, 134);
   > a {
     color: $item-bg-color;
   }
   nuxt-link {
     color: rgb(247, 247, 247);
   }
 }

 .sb-link-icon {
   width: 14px;
   height: 14px;
   color: red;
   margin-left: 9px;
   fill: purple;
   path {
     fill: rgb(223, 40, 223);
   }
 }
}
</style>
