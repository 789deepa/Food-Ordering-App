const IMAGES = {
  coastal: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=508&h=320&fit=crop",
  tandoor: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=508&h=320&fit=crop",
  biryani: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=508&h=320&fit=crop",
};

const resList = [
  {
    id: "102",
    name: "Coastal Curry House",
    cuisine: "Goan, Konkan, Seafood",
    imageId: IMAGES.coastal,
    menu: [
    {
      title: "Butter Chicken",
      price: 320,
      desc: "Creamy tomato-based curry with tender chicken pieces"
    },
    {
      title: "Garlic Naan",
      price: 60,
      desc: "Soft naan topped with garlic and butter"
    }
  ],
    offer: [
    {
      title: "Buy 1 Get 1",
      desc: "Applicable on selected dishes"
    }
  ],
    description:
      "Coastal Curry House specializes in authentic Goan and Konkan-style seafood.",
    rating: 3.5,
    totalRatings: "9.8K+",
    avgCostForTwo: "₹850 for two",
    deliveryTime: "40 mins",
    distance: "7.1 km",
    isPureVeg: false,
    isOpen: true,
    offers: ["20% OFF up to ₹120"],
    tags: ["Seafood Special", "Authentic Coastal", "Spicy"],
    outlet: "Dharampeth, Nagpur"
  },

  {
    id: "103",
    name: "Urban Tandoor",
    cuisine: "Punjabi, North Indian, Tandoor",
    description:
      "Urban Tandoor brings smoky tandoori flavors and classic Punjabi dishes to the city.",
    rating: 4.3,
    menu: [
    {
      title: "Veg Biryani",
      price: 220,
      desc: "Aromatic basmati rice cooked with mixed vegetables and spices"
    },
    {
      title: "Paneer Tikka",
      price: 260,
      desc: "Grilled paneer cubes marinated in Indian spices"
    }
  ],
  offers: [
    {
      title: "Flat ₹100 OFF",
      desc: "On orders above ₹799"
    }
  ],
    totalRatings: "15K+",
    avgCostForTwo: "₹750 for two",
    deliveryTime: "35 mins",
    distance: "5.4 km",
    isPureVeg: false,
    isOpen: true,
    imageId: IMAGES.tandoor,
    offers: ["Flat ₹100 OFF on orders above ₹399"],
    tags: ["Tandoori", "Comfort Food", "Best Sellers"],
    outlet: "Ramdaspeth, Nagpur"
  },

  {
    id: "104",
    name: "Biryani Store",
    cuisine: "Healthy, Salads, Continental",
    description:
      "Green Bowl Studio focuses on healthy, balanced meals with fresh ingredients.",
    rating: 4.7,
    totalRatings: "6.2K+",
    menu: [
    {
      title: "Paneer Butter Masala",
      price: 250,
      desc: "Rich tomato gravy with butter and cream"
    },
    {
      title: "Dal Tadka",
      price: 180,
      desc: "Yellow dal tempered with spices"
    }
    ],
    offers: [
    {
      title: "20% OFF",
      desc: "Valid on orders above ₹499"
    }],
    avgCostForTwo: "₹600 for two",
    deliveryTime: "28 mins",
    distance: "3.2 km",
    isPureVeg: true,
    isOpen: true,
    isPromoted: true,
    imageId: IMAGES.biryani,
    offers: ["Free smoothie on orders above ₹499"],
    tags: ["Healthy Eats", "Protein Rich", "Low Cal"],
    outlet: "IT Park, Nagpur"
  }
];

export default resList;