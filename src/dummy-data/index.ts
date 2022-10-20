import { SearchProductListViewModel } from "@/types/novicell/generated/search";
import {ProductInterface} from '@/types/appresources';

export const getSimpleProd = () => {
  const obj : ProductInterface = {
    id: 5,
    name: 'Hello prod',
    characteristics: {
      color: 'grey',
      shape: 'strange',
    }
  }
  return obj;
}
export const getExampleProd = () => {
    const obj: SearchProductListViewModel = {
      productId: "FLUPRO 7",
      productName: "Flutex Pro 7",
      productDescription: null,
      productType: "wetgoods",
      variants: getVariants(),
      marketingHeadline:
        "Mat vægmaling med synlig glans, ekstra dækkevne, høj kvalitet og stærk miljøprofil.",
      variantId: "30820",
      variantName: "Flutex Pro 7",
      variantDescription: null,
      url: "/test",
      sku: "30820",
      isSellable: false,
      price: {
        unitPrice: {
          amount: "1049.25",
          displayValue: "1.049,25 kr.",
        },
        unitDiscount: {
          amount: "349.75",
          displayValue: "349,75 kr.",
        },
        hasDiscount: true,
        unitDiscountPercentage: "33%",
        tiers: [],
      },
      primaryImage: {
        altText: "",
        url: "https://images.unsplash.com/photo-1663006769761-45a1c52c6fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        // url: "/assets/img/joe-Qh.jpg",
      },
      size: null,
      sizeUnit: null,
      categories: null,
      usp1: "Dækkeevne",
      usp2: "Synlig glans ",
      usageInformation:
        "Opholdsrum, gangarealer, entre, kontor, køkken, erhvervslokaler, institution, klinik, butik og trappeopgange.\nBeton, letbeton, puds, tegl, gipskarton, fibergips, cementfiberplader, cementspånplader.",
      washabilityRating: 1,
      glossRating: 7,
      dryingTimeHours: 1,
      dryingTimeRecoatableHours: 4,
      dryingTimeFullyCuredHours: 28,
      environmentalInformation:
        "Fjern mest mulig maling fra værktøj før afvaskning i vand. Hæld ikke rest af flydende maling i afløb, aflever det på den lokale genbrugsstation. Minimer dit malingsaffald ved på forhånd at beregne, hvor meget der skal bruges. Opbevar overskydende maling korrekt så rester kan anvendes, og miljøpåvirkning således minimeres.",
      isTintable: true,
      tintedColorHex: null,
      roomFeatures: ["Gang/entré", "Børneværelse", "Stue"],
      ecoLabels: [
        "VOC max g/l",
        "svanen",
        "Sundahus",
        "DGNB DK",
        "Bygvarubedömningen",
        "Breeam",
        "Basta",
        "eco-label se/044/002",
        "EN 15251",
      ],
      substrateFeatures: ["Gips", "Malet", "Tegl", "Cement", "Beton", " Puds"],
    };
    return obj;
  };
  
  const getVariants = () => {
    const variants = [];
  
    const variant = {
      variantId: "30820",
      variantName: "Flutex Pro 7",
      variantDescription: null,
      url: "/test",
      sku: "30820",
      isSellable: false,
      price: {
        unitPrice: {
          amount: "1049.25",
          displayValue: "1.049,25 kr.",
        },
        unitDiscount: {
          amount: "349.75",
          displayValue: "349,75 kr.",
        },
        hasDiscount: true,
        unitDiscountPercentage: "33%",
        tiers: [],
      },
      primaryImage: {
        altText: "",
        // url: "/assets/img/joe-Qh.jpg",
        url: "https://images.unsplash.com/photo-1663006769761-45a1c52c6fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      size: null,
      sizeUnit: null,
      categories: null,
      usp1: "Dækkeevne",
      usp2: "Synlig glans ",
      usageInformation:
        "Opholdsrum, gangarealer, entre, kontor, køkken, erhvervslokaler, institution, klinik, butik og trappeopgange.\nBeton, letbeton, puds, tegl, gipskarton, fibergips, cementfiberplader, cementspånplader.",
      washabilityRating: 1,
      glossRating: 7,
      dryingTimeHours: 1,
      dryingTimeRecoatableHours: 4,
      dryingTimeFullyCuredHours: 28,
      environmentalInformation:
        "Fjern mest mulig maling fra værktøj før afvaskning i vand. Hæld ikke rest af flydende maling i afløb, aflever det på den lokale genbrugsstation. Minimer dit malingsaffald ved på forhånd at beregne, hvor meget der skal bruges. Opbevar overskydende maling korrekt så rester kan anvendes, og miljøpåvirkning således minimeres.",
      isTintable: true,
      tintedColorHex: null,
      roomFeatures: ["Gang/entré", "Børneværelse", "Stue"],
      ecoLabels: [
        "VOC max g/l",
        "svanen",
        "Sundahus",
        "DGNB DK",
        "Bygvarubedömningen",
        "Breeam",
        "Basta",
        "eco-label se/044/002",
        "EN 15251",
      ],
      substrateFeatures: ["Gips", "Malet", "Tegl", "Cement", "Beton", " Puds"],
    };
  
    for (let index = 0; index < 3; index++) {
      variants.push(variant);
    }
    return variants;
  };