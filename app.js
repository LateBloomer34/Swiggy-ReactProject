import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/head";
import Footer from "./src/component/footer";

const restaurants = [
  {
    info: {
      id: "11106",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/fa159f6f-0a15-49ad-9c9c-dc8f38b766b1_11106.JPG",
      locality: "Jail Road",
      areaName: "Jail Road",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.4,
      parentId: "721",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-23 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "897",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/pizza-hut-jail-road-rest11106",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "43908",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/8a4eb497-8d4b-464e-b635-1e1ccc30e423_43908.jpg",
      locality: "Janakpuri",
      areaName: "Janakpuri",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
      parentId: "166",
      avgRatingString: "4.4",
      totalRatingsString: "40K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-23 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.6",
          ratingCount: "1.6K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/burger-king-janakpuri-rest43908",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "254117",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/199a7c7b-d3f0-4d1e-a1cd-60be14ec5020_254117.JPG",
      locality: "Ashok Nagar",
      areaName: "Tilak Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.6,
      parentId: "630",
      avgRatingString: "4.6",
      totalRatingsString: "32K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-23 01:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹117",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/mcdonalds-ashok-nagar-tilak-nagar-rest254117",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "40807",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/64a5cf0a-6a7e-4a55-8607-64724600f824_40807.jpg",
      locality: "Jail Road",
      areaName: "Hari Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.2,
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "19K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-23 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "472",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/subway-jail-road-hari-nagar-rest40807",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "569370",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/ca90cfa2-5654-4b73-b6f7-4f1629945d28_569370.JPG",
      locality: "Pankha Road",
      areaName: "Janakpuri",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "3.1K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-23 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/kfc-pankha-road-janakpuri-rest569370",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "699303",
      name: "WeFit - Protein Bowls, Salads & Sandwiches",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/47085197-1e2a-47e6-82be-913debf7e108_699303.jpg",
      locality: "Mayapuri Phase I",
      areaName: "Rajouri",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy Food", "Salads", "Keto", "Snacks"],
      avgRating: 4.6,
      parentId: "355285",
      avgRatingString: "4.6",
      totalRatingsString: "790",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-23 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "High%20Protein/rx%20tag%205.png",
            description: "High Protein",
          },
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Healthy.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "High Protein",
                  imageId: "High%20Protein/rx%20tag%205.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Healthy.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/wefit-protein-bowls-salads-and-sandwiches-mayapuri-phase-i-rajouri-rest699303",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "605410",
      name: "Dum Safar Biryani",
      cloudinaryImageId: "pgjb0khiqbkzleppiscd",
      locality: "Rajouri Garden Extension",
      areaName: "Rajouri Garden",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Kebabs", "North Indian", "Barbecue"],
      avgRating: 4.3,
      parentId: "351013",
      avgRatingString: "4.3",
      totalRatingsString: "941",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-22 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/dum-safar-biryani-extension-rajouri-garden-rest605410",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "750457",
      name: "Daily Kitchen - Everyday Homely Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/b8cd8d00-697a-407d-b9c0-5761fdf1c6ac_750457.jpg",
      locality: "Mayapuri Phase I",
      areaName: "Rajouri",
      costForTwo: "₹250 for two",
      cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
      avgRating: 4.4,
      parentId: "444382",
      avgRatingString: "4.4",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-23 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/daily-kitchen-everyday-homely-meals-mayapuri-phase-i-rajouri-rest750457",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "713387",
      name: "Blue Tokai Coffee Roasters",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/5/10da5f95-53a9-4a8b-8607-f2aea8262428_713387.JPG",
      locality: "Ground Floor",
      areaName: "Janakpuri",
      costForTwo: "₹600 for two",
      cuisines: ["Cafe", "Coffee", "Beverages"],
      avgRating: 4.6,
      parentId: "2682",
      avgRatingString: "4.6",
      totalRatingsString: "892",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-22 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/blue-tokai-coffee-roasters-ground-floor-janakpuri-rest713387",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "558797",
      name: "HRX by EatFit",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/4/98bd3c69-6ecb-4772-961c-7f4c6f295c54_558797.JPG",
      locality: "2Nd Block",
      areaName: "Tilak Nagar",
      costForTwo: "₹450 for two",
      cuisines: ["Healthy Food", "Salads", "Burgers"],
      avgRating: 4.4,
      parentId: "624615",
      avgRatingString: "4.4",
      totalRatingsString: "635",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-22 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "High%20Protein/rx%20tag%205.png",
            description: "High Protein",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "High Protein",
                  imageId: "High%20Protein/rx%20tag%205.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/hrx-by-eatfit-2nd-block-tilak-nagar-rest558797",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "546929",
      name: "Big Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_546929.JPG",
      locality: "J2 Block",
      areaName: "Rajouri Garden",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "434792",
      avgRatingString: "4.3",
      totalRatingsString: "1.7K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-23 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/big-bowl-j2-block-rajouri-garden-rest546929",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "545333",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "J Block",
      areaName: "Rajouri Garden",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "61955",
      avgRatingString: "4.3",
      totalRatingsString: "3.1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-23 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/chinese-wok-j-block-rajouri-garden-rest545333",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "350077",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/2/bbed78c3-e704-4f1d-bc38-e20cc6549ad9_350077.JPG",
      locality: "Shivaji Market",
      areaName: "Tagore Garden",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.7,
      parentId: "3818",
      avgRatingString: "4.7",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-23 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/bakingo-shivaji-market-tagore-garden-rest350077",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "699297",
      name: "BOX8 - Desi Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/2068723d-167a-49f8-9ff9-3084cf3942ef_699297.jpg",
      locality: "Mayapuri Phase I",
      areaName: "Rajouri",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Biryani", "Thalis", "Home Food"],
      avgRating: 4.6,
      parentId: "10655",
      avgRatingString: "4.6",
      totalRatingsString: "2.8K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-23 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/box8-desi-meals-mayapuri-phase-i-rajouri-rest699297",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "337439",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/6/55e3a17b-c34c-4dfe-a7c2-77d6843926b1_337439.JPG",
      locality: "Janakpuri",
      areaName: "Janakpuri",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.6,
      parentId: "1040",
      avgRatingString: "4.6",
      totalRatingsString: "7.8K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-23 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "338",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/theobroma-janakpuri-rest337439",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "585696",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "ibde12numlpejh2wzlly",
      locality: "Dwarka",
      areaName: "Janakpuri",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.2,
      parentId: "4961",
      avgRatingString: "4.2",
      totalRatingsString: "7.0K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-23 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/la-pinoz-pizza-dwarka-janakpuri-rest585696",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "15854",
      name: "Faasos - Wraps, Rolls & Shawarma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/ba53240d-d168-4f28-8852-6d93f8444e22_15854.JPG",
      locality: "Lal Sain Mandir Marg",
      areaName: "Janakpuri",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "21809",
      avgRatingString: "4.3",
      totalRatingsString: "19K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-22 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Rolls.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Rolls.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹29",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/faasos-wraps-rolls-and-shawarma-lal-sain-mandir-marg-janakpuri-rest15854",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "558087",
      name: "Taco Bell",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/b0b3dc89-9839-498b-a0f0-ed8d9dffe53d_558087.JPG",
      locality: "Janak Cinema Complex",
      areaName: "Janakpuri",
      costForTwo: "₹300 for two",
      cuisines: ["Mexican", "Fast Food", "Snacks"],
      avgRating: 4.4,
      parentId: "1557",
      avgRatingString: "4.4",
      totalRatingsString: "4.7K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-23 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹58",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.7",
          ratingCount: "92",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/taco-bell-janak-cinema-complex-janakpuri-rest558087",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "616083",
      name: "Good Flippin' Burgers",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/71dbd632-c13e-4e68-90b8-afeac59c7c22_616083.JPG",
      locality: "Rajouri Garden",
      areaName: "Rajouri Garden",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "American", "Fast Food", "Beverages"],
      avgRating: 4.5,
      parentId: "11748",
      avgRatingString: "4.5",
      totalRatingsString: "4.1K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-23 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹195",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.8",
          ratingCount: "340",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/good-flippin-burgers-rajouri-garden-rest616083",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "630428",
      name: "Slyce Pizza",
      cloudinaryImageId: "36167500ba79ceafd933e06b0a57ea6a",
      locality: "Tatar Pur",
      areaName: "Rajouri Garden Extension",
      costForTwo: "₹600 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food"],
      avgRating: 3.5,
      parentId: "321813",
      avgRatingString: "3.5",
      totalRatingsString: "1.5K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-23 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-fc01e730-72f7-4085-83fe-db51290ac072",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/slyce-pizza-tatar-pur-rajouri-garden-extension-rest630428",
      type: "WEBLINK",
    },
  },
];

function filterData(searchText, restaurantList) {
  const filterData = restaurantList.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

// const [restaurantList, setRestaurantList] = useState(restaurants);

const SearchBox = ({restaurantList, setRestaurantList}) => {
  const [searchText, setsearchText] = useState("");
  return (
    <div>
      {/* seach box creation */}
      <input
        placeholder="search here"
        value={searchText}
        onChange={(e) => setsearchText(e.target.value)}
      />

      {/* search box with functioning */}
      <button
        className="searchButton"
        onClick={() => {
          const data = filterData(searchText, restaurantList);
          setRestaurantList(data);
        }}>
        Search for {searchText}
      </button>
    </div>
  );
};

const RestList = ({ restDetail }) => 
{
  const {name , cuisines, areaName, cloudinaryImageId } = restDetail.info;
  return(
  <div id="restDetail">
    <img
      className="RestImage"
      src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        cloudinaryImageId
      }
      alt="imageNotRender"
    />
    <h1 className="restName">{name}</h1>
    <h2 className="restCuision">{cuisines.join(", ")}</h2>
    <h3 className="restRating">{areaName}</h3>
  </div>
)};

const Main = () => {
  const [restaurantList, setRestaurantList] = useState(restaurants);
  return (
  <div id="restBox">
    <SearchBox restaurantList={restaurantList} 
        setRestaurantList={setRestaurantList}/>
    <div id="restInfo">
      {restaurantList.map((i) => (
        <RestList restDetail={i} key={i.info.id} />
      ))}
    </div>
  </div>
)};

const App = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

const dest = ReactDOM.createRoot(document.querySelector("#root"));
dest.render(<App />);
