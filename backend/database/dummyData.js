const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 1499,
    category: "Electronics",
    rating: 4.5,
    stock: 25,
    brand: "SoundMax",
    description: "Enjoy immersive sound with comfortable wireless headphones designed for music, calls, and entertainment.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    discount: 20,
    colors: ["Black", "White", "Blue"],
    features: [
      "Bluetooth 5.3",
      "Up to 30 hours battery",
      "Built-in microphone",
      "Noise isolation",
      "Fast charging"
    ],
    specifications: {
      connectivity: "Bluetooth",
      battery: "30 Hours",
      weight: "250g",
      warranty: "1 Year"
    },
    seller: "TechWorld",
    warranty: "1 Year Manufacturer Warranty"
  },

  {
    id: 2,
    title: "Smart Watch",
    price: 2499,
    category: "Electronics",
    rating: 4.3,
    stock: 18,
    brand: "FitPro",
    description: "A stylish smartwatch with fitness tracking, notifications, heart-rate monitoring, and long battery life.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    discount: 15,
    colors: ["Black", "Silver", "Rose Gold"],
    features: [
      "Heart rate monitoring",
      "Step counter",
      "Sleep tracking",
      "Call notifications",
      "Multiple sports modes"
    ],
    specifications: {
      display: "1.8 inch AMOLED",
      battery: "7 Days",
      connectivity: "Bluetooth",
      waterResistance: "IP68"
    },
    seller: "GadgetZone",
    warranty: "1 Year Manufacturer Warranty"
  },

  {
    id: 3,
    title: "Running Shoes",
    price: 1999,
    category: "Footwear",
    rating: 4.4,
    stock: 32,
    brand: "RunX",
    description: "Lightweight running shoes designed to provide excellent cushioning and comfort during workouts.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    discount: 25,
    colors: ["Black", "Red", "White"],
    sizes: ["7", "8", "9", "10", "11"],
    features: [
      "Lightweight design",
      "Breathable mesh",
      "Shock absorption",
      "Anti-slip sole",
      "Comfort cushioning"
    ],
    specifications: {
      material: "Mesh and Rubber",
      sole: "Rubber",
      type: "Running Shoes",
      gender: "Unisex"
    },
    seller: "Sporty Store",
    warranty: "6 Months"
  },

  {
    id: 4,
    title: "Cotton T-Shirt",
    price: 599,
    category: "Clothing",
    rating: 4.2,
    stock: 50,
    brand: "UrbanWear",
    description: "Soft and comfortable cotton T-shirt suitable for everyday casual wear.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    discount: 30,
    colors: ["Black", "White", "Blue", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    features: [
      "100% Cotton",
      "Soft fabric",
      "Regular fit",
      "Breathable",
      "Machine washable"
    ],
    specifications: {
      material: "100% Cotton",
      fit: "Regular Fit",
      sleeve: "Half Sleeve",
      pattern: "Solid"
    },
    seller: "Fashion Hub",
    warranty: "7 Days Replacement"
  },

  {
    id: 5,
    title: "Laptop Backpack",
    price: 899,
    category: "Accessories",
    rating: 4.6,
    stock: 20,
    brand: "CarryPro",
    description: "Durable laptop backpack with multiple compartments for laptops, books, gadgets, and accessories.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    discount: 18,
    colors: ["Black", "Grey", "Navy"],
    features: [
      "Laptop compartment",
      "Water resistant",
      "Multiple pockets",
      "Padded shoulder straps",
      "USB charging port"
    ],
    specifications: {
      capacity: "25 Litres",
      laptopSupport: "Up to 15.6 inch",
      material: "Polyester",
      waterResistance: "Yes"
    },
    seller: "BagWorld",
    warranty: "1 Year"
  },

  {
    id: 6,
    title: "Bluetooth Speaker",
    price: 1299,
    category: "Electronics",
    rating: 4.1,
    stock: 15,
    brand: "BoomSound",
    description: "Portable Bluetooth speaker delivering powerful sound with a compact and stylish design.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    discount: 22,
    colors: ["Black", "Blue", "Red"],
    features: [
      "Bluetooth 5.0",
      "12 hour battery",
      "Portable design",
      "Water resistant",
      "Deep bass"
    ],
    specifications: {
      battery: "12 Hours",
      connectivity: "Bluetooth 5.0",
      power: "20W",
      waterResistance: "IPX5"
    },
    seller: "AudioWorld",
    warranty: "1 Year"
  },

  {
    id: 7,
    title: "Sunglasses",
    price: 799,
    category: "Accessories",
    rating: 4.0,
    stock: 40,
    brand: "SunStyle",
    description: "Stylish sunglasses offering UV protection with a lightweight and comfortable frame.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    discount: 35,
    colors: ["Black", "Brown", "Blue"],
    features: [
      "UV400 protection",
      "Lightweight frame",
      "Scratch resistant lenses",
      "Classic design"
    ],
    specifications: {
      lensType: "Polarized",
      protection: "UV400",
      frame: "Polycarbonate",
      gender: "Unisex"
    },
    seller: "Fashion Point",
    warranty: "6 Months"
  },

  {
    id: 8,
    title: "Jeans",
    price: 1499,
    category: "Clothing",
    rating: 4.3,
    stock: 28,
    brand: "DenimPro",
    description: "Comfortable denim jeans with a modern fit suitable for casual and everyday wear.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    discount: 25,
    colors: ["Blue", "Black", "Dark Blue"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    features: [
      "Stretchable denim",
      "Comfort fit",
      "Fade resistant",
      "Durable stitching"
    ],
    specifications: {
      material: "Cotton Denim",
      fit: "Slim Fit",
      waist: "Mid Rise",
      pattern: "Solid"
    },
    seller: "Denim Store",
    warranty: "7 Days Replacement"
  },

  {
    id: 9,
    title: "Gaming Mouse",
    price: 999,
    category: "Electronics",
    rating: 4.7,
    stock: 22,
    brand: "GameX",
    description: "High precision gaming mouse with customizable buttons and RGB lighting.",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    discount: 20,
    colors: ["Black", "White"],
    features: [
      "Adjustable DPI",
      "RGB lighting",
      "Programmable buttons",
      "Ergonomic design",
      "High precision sensor"
    ],
    specifications: {
      dpi: "8000 DPI",
      connectivity: "USB",
      buttons: "7",
      sensor: "Optical"
    },
    seller: "Gaming Hub",
    warranty: "1 Year"
  },

  {
    id: 10,
    title: "Mechanical Keyboard",
    price: 2299,
    category: "Electronics",
    rating: 4.8,
    stock: 12,
    brand: "KeyMaster",
    description: "Premium mechanical keyboard designed for gaming, programming, and productivity.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    discount: 15,
    colors: ["Black", "White"],
    features: [
      "Mechanical switches",
      "RGB backlight",
      "Anti-ghosting",
      "Detachable USB cable",
      "Gaming mode"
    ],
    specifications: {
      switchType: "Blue Mechanical",
      connectivity: "USB",
      layout: "Full Size",
      lighting: "RGB"
    },
    seller: "PC World",
    warranty: "1 Year"
  },

  {
    id: 11,
    title: "Water Bottle",
    price: 499,
    category: "Home",
    rating: 4.4,
    stock: 60,
    brand: "HydroLife",
    description: "Reusable stainless steel water bottle designed to keep beverages fresh for longer.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    discount: 20,
    colors: ["Black", "Silver", "Blue"],
    features: [
      "Leak proof",
      "BPA free",
      "Stainless steel",
      "Easy to carry",
      "Reusable"
    ],
    specifications: {
      capacity: "1 Litre",
      material: "Stainless Steel",
      insulation: "Double Wall",
      lid: "Screw Cap"
    },
    seller: "Home Essentials",
    warranty: "6 Months"
  },

  {
    id: 12,
    title: "Travel Mug",
    price: 699,
    category: "Home",
    rating: 4.2,
    stock: 35,
    brand: "TravelMate",
    description: "Insulated travel mug that keeps your coffee and beverages hot while travelling.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
    discount: 15,
    colors: ["Black", "White", "Silver"],
    features: [
      "Double wall insulation",
      "Leak resistant",
      "Easy grip",
      "Travel friendly"
    ],
    specifications: {
      capacity: "450ml",
      material: "Stainless Steel",
      insulation: "Double Wall",
      lid: "Secure Lid"
    },
    seller: "Travel Essentials",
    warranty: "6 Months"
  },

  {
    id: 13,
    title: "Leather Wallet",
    price: 899,
    category: "Accessories",
    rating: 4.5,
    stock: 27,
    brand: "LeatherCraft",
    description: "Premium leather wallet with multiple card slots and compartments for everyday use.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
    discount: 20,
    colors: ["Black", "Brown"],
    features: [
      "Genuine leather",
      "Multiple card slots",
      "Cash compartment",
      "Compact design"
    ],
    specifications: {
      material: "Genuine Leather",
      cardSlots: "8",
      compartments: "2",
      type: "Bi-fold"
    },
    seller: "LeatherCraft Store",
    warranty: "1 Year"
  },

  {
    id: 14,
    title: "Formal Shirt",
    price: 1199,
    category: "Clothing",
    rating: 4.1,
    stock: 31,
    brand: "OfficeStyle",
    description: "Elegant formal shirt made from comfortable fabric for office and professional occasions.",
    image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab",
    discount: 25,
    colors: ["White", "Blue", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    features: [
      "Comfortable fabric",
      "Regular fit",
      "Formal design",
      "Easy iron"
    ],
    specifications: {
      material: "Cotton Blend",
      fit: "Regular Fit",
      sleeve: "Full Sleeve",
      pattern: "Solid"
    },
    seller: "Office Fashion",
    warranty: "7 Days Replacement"
  },

  {
    id: 15,
    title: "Casual Sneakers",
    price: 1799,
    category: "Footwear",
    rating: 4.6,
    stock: 19,
    brand: "StreetStep",
    description: "Trendy casual sneakers combining comfort and style for everyday use.",
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3",
    discount: 20,
    colors: ["White", "Black", "Grey"],
    sizes: ["7", "8", "9", "10", "11"],
    features: [
      "Lightweight",
      "Cushioned sole",
      "Breathable upper",
      "Flexible outsole"
    ],
    specifications: {
      material: "Synthetic",
      sole: "Rubber",
      type: "Casual Sneakers",
      gender: "Unisex"
    },
    seller: "StreetStep",
    warranty: "6 Months"
  },

  {
    id: 16,
    title: "Table Lamp",
    price: 899,
    category: "Home",
    rating: 4.3,
    stock: 24,
    brand: "GlowHome",
    description: "Modern table lamp providing warm lighting for bedrooms, study rooms, and offices.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    discount: 18,
    colors: ["White", "Black", "Gold"],
    features: [
      "Warm light",
      "Modern design",
      "Energy efficient",
      "Easy installation"
    ],
    specifications: {
      power: "12W",
      lightColor: "Warm White",
      voltage: "220V",
      bulbType: "LED"
    },
    seller: "Home Decor",
    warranty: "1 Year"
  },

  {
    id: 17,
    title: "USB-C Cable",
    price: 299,
    category: "Electronics",
    rating: 4.0,
    stock: 75,
    brand: "ChargePro",
    description: "Durable USB-C cable supporting fast charging and high-speed data transfer.",
    image: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126",
    discount: 30,
    colors: ["Black", "White"],
    features: [
      "Fast charging",
      "High speed data transfer",
      "Durable cable",
      "Universal compatibility"
    ],
    specifications: {
      length: "1.5 Metres",
      connector: "USB-C",
      charging: "Fast Charging",
      dataSpeed: "480 Mbps"
    },
    seller: "Tech Accessories",
    warranty: "6 Months"
  },

  {
    id: 18,
    title: "Mobile Phone Stand",
    price: 399,
    category: "Accessories",
    rating: 4.4,
    stock: 45,
    brand: "DeskMate",
    description: "Adjustable mobile phone stand perfect for watching videos, video calls, and desk work.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07",
    discount: 20,
    colors: ["Black", "White", "Silver"],
    features: [
      "Adjustable angle",
      "Foldable design",
      "Anti-slip base",
      "Portable"
    ],
    specifications: {
      material: "Aluminium",
      compatibility: "Most Smartphones",
      adjustment: "180 Degrees",
      type: "Desk Stand"
    },
    seller: "DeskMate",
    warranty: "6 Months"
  },

  {
    id: 19,
    title: "Yoga Mat",
    price: 799,
    category: "Fitness",
    rating: 4.5,
    stock: 33,
    brand: "FitLife",
    description: "Comfortable non-slip yoga mat suitable for yoga, stretching, meditation, and home workouts.",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2",
    discount: 25,
    colors: ["Purple", "Blue", "Black", "Green"],
    features: [
      "Non-slip surface",
      "Easy to clean",
      "Lightweight",
      "Extra cushioning"
    ],
    specifications: {
      thickness: "6mm",
      material: "TPE",
      length: "183cm",
      width: "61cm"
    },
    seller: "Fitness World",
    warranty: "6 Months"
  },

  {
    id: 20,
    title: "Dumbbell Set",
    price: 1999,
    category: "Fitness",
    rating: 4.6,
    stock: 14,
    brand: "PowerFit",
    description: "Durable dumbbell set suitable for strength training and home workouts.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    discount: 15,
    colors: ["Black", "Red"],
    features: [
      "Non-slip grip",
      "Durable construction",
      "Suitable for home workouts",
      "Multiple weights"
    ],
    specifications: {
      totalWeight: "20kg",
      material: "Cast Iron",
      coating: "PVC",
      pieces: "2 Dumbbells"
    },
    seller: "PowerFit",
    warranty: "1 Year"
  },

  {
    id: 21,
    title: "Office Chair",
    price: 5499,
    category: "Furniture",
    rating: 4.3,
    stock: 8,
    brand: "ComfortSeat",
    description: "Ergonomic office chair designed to provide comfort and support during long working hours.",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
    discount: 12,
    colors: ["Black", "Grey"],
    features: [
      "Ergonomic design",
      "Adjustable height",
      "Lumbar support",
      "360 degree rotation",
      "Padded seat"
    ],
    specifications: {
      material: "Mesh and Metal",
      height: "Adjustable",
      rotation: "360 Degrees",
      capacity: "120kg"
    },
    seller: "Furniture World",
    warranty: "2 Years"
  },

  {
    id: 22,
    title: "Study Table",
    price: 3999,
    category: "Furniture",
    rating: 4.2,
    stock: 10,
    brand: "WoodCraft",
    description: "Modern study table with spacious working area and storage space for books and accessories.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6b5",
    discount: 10,
    colors: ["Brown", "White", "Black"],
    features: [
      "Spacious tabletop",
      "Storage drawer",
      "Sturdy construction",
      "Modern design"
    ],
    specifications: {
      material: "Engineered Wood",
      width: "120cm",
      height: "75cm",
      storage: "1 Drawer"
    },
    seller: "WoodCraft Furniture",
    warranty: "1 Year"
  },

  {
    id: 23,
    title: "Coffee Maker",
    price: 2999,
    category: "Kitchen",
    rating: 4.5,
    stock: 16,
    brand: "BrewMaster",
    description: "Easy-to-use coffee maker designed to prepare fresh and delicious coffee at home.",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6",
    discount: 18,
    colors: ["Black", "Silver"],
    features: [
      "Fast brewing",
      "Easy operation",
      "Removable filter",
      "Compact design"
    ],
    specifications: {
      capacity: "1.2 Litres",
      power: "1000W",
      type: "Drip Coffee Maker",
      material: "Stainless Steel"
    },
    seller: "Kitchen World",
    warranty: "2 Years"
  },

  {
    id: 24,
    title: "Electric Kettle",
    price: 1299,
    category: "Kitchen",
    rating: 4.4,
    stock: 29,
    brand: "QuickBoil",
    description: "Fast electric kettle with automatic shut-off and safety protection.",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5",
    discount: 20,
    colors: ["Black", "Silver", "White"],
    features: [
      "Fast boiling",
      "Auto shut-off",
      "Dry boil protection",
      "LED indicator"
    ],
    specifications: {
      capacity: "1.5 Litres",
      power: "1500W",
      material: "Stainless Steel",
      voltage: "220V"
    },
    seller: "Kitchen World",
    warranty: "1 Year"
  },

  {
    id: 25,
    title: "Back Cover",
    price: 349,
    category: "Accessories",
    rating: 4.1,
    stock: 70,
    brand: "CasePro",
    description: "Slim and protective mobile phone back cover with a stylish design.",
    image: "https://images.unsplash.com/photo-1601593346740-925612772716",
    discount: 35,
    colors: ["Black", "Blue", "Transparent", "Red"],
    features: [
      "Shock protection",
      "Slim design",
      "Raised camera protection",
      "Anti-slip grip"
    ],
    specifications: {
      material: "TPU",
      type: "Back Cover",
      compatibility: "Multiple Models",
      protection: "Shock Resistant"
    },
    seller: "CasePro",
    warranty: "7 Days"
  },

  {
    id: 26,
    title: "Power Bank",
    price: 1599,
    category: "Electronics",
    rating: 4.5,
    stock: 21,
    brand: "PowerMax",
    description: "High-capacity power bank with fast charging support for smartphones and other devices.",
    image: "https://images.unsplash.com/photo-1609592424770-3f2d9b8e8e99",
    discount: 20,
    colors: ["Black", "White"],
    features: [
      "Fast charging",
      "Dual USB output",
      "LED battery indicator",
      "Compact design"
    ],
    specifications: {
      capacity: "20000mAh",
      output: "22.5W",
      ports: "USB-A + USB-C",
      input: "USB-C"
    },
    seller: "PowerMax",
    warranty: "1 Year"
  },

  {
    id: 27,
    title: "Air Purifier",
    price: 6999,
    category: "Home",
    rating: 4.7,
    stock: 7,
    brand: "PureAir",
    description: "Advanced air purifier designed to improve indoor air quality by filtering dust and pollutants.",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd",
    discount: 15,
    colors: ["White", "Black"],
    features: [
      "HEPA filter",
      "Air quality indicator",
      "Quiet operation",
      "Multiple fan speeds",
      "Sleep mode"
    ],
    specifications: {
      filter: "True HEPA",
      coverage: "500 sq ft",
      noise: "Low Noise",
      power: "45W"
    },
    seller: "PureAir Store",
    warranty: "2 Years"
  },

  {
    id: 28,
    title: "Bluetooth Earbuds",
    price: 1799,
    category: "Electronics",
    rating: 4.4,
    stock: 26,
    brand: "SoundPods",
    description: "Compact wireless earbuds with clear audio, touch controls, and a portable charging case.",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
    discount: 25,
    colors: ["Black", "White"],
    features: [
      "Bluetooth 5.3",
      "Touch controls",
      "Low latency mode",
      "Noise cancellation",
      "Charging case"
    ],
    specifications: {
      battery: "30 Hours with Case",
      connectivity: "Bluetooth 5.3",
      charging: "USB-C",
      waterResistance: "IPX4"
    },
    seller: "SoundPods",
    warranty: "1 Year"
  },

  {
    id: 29,
    title: "Sports Jacket",
    price: 2499,
    category: "Clothing",
    rating: 4.5,
    stock: 17,
    brand: "ActiveWear",
    description: "Lightweight sports jacket designed for outdoor activities, running, and casual wear.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    discount: 20,
    colors: ["Black", "Blue", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    features: [
      "Lightweight",
      "Wind resistant",
      "Breathable fabric",
      "Full zip design",
      "Multiple pockets"
    ],
    specifications: {
      material: "Polyester",
      fit: "Regular Fit",
      closure: "Zipper",
      gender: "Unisex"
    },
    seller: "ActiveWear",
    warranty: "6 Months"
  },

  {
    id: 30,
    title: "Handbag",
    price: 1399,
    category: "Accessories",
    rating: 4.3,
    stock: 23,
    brand: "StyleBag",
    description: "Elegant handbag with spacious compartments and a stylish design suitable for everyday use.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    discount: 25,
    colors: ["Black", "Brown", "Beige", "Red"],
    features: [
      "Multiple compartments",
      "Adjustable strap",
      "Premium finish",
      "Spacious interior"
    ],
    specifications: {
      material: "Faux Leather",
      compartments: "3",
      closure: "Zip",
      strap: "Adjustable"
    },
    seller: "StyleBag",
    warranty: "6 Months"
  }
];

module.exports = { products };