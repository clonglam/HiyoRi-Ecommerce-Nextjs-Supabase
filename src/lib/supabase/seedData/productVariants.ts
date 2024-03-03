const ProductSKUs = [
  {
    id: 1,
    name: "BILD",
    description: `Poster, 41x51(16x20 ")`,
    featured_image_id: 1,
    skus: [
      {
        sku: "P0001SSCW",
        price: "100.00",
        inventory: 10,
        varianets: [
          { variant: "Size", value: "Small" },
          { variant: "Color", value: "White" },
        ],
      },
      {
        sku: "P0001SMCW",
        price: 100,
        inventory: 10,
        varianets: [
          { variant: "Size", value: "Medium" },
          { variant: "Color", value: "White" },
        ],
      },
      {
        sku: "P0001SLCR",
        price: 100,
        inventory: 10,
        varianets: [
          { variant: "Size", value: "Large" },
          { variant: "Color", value: "Red" },
        ],
      },
    ],
  },
];
